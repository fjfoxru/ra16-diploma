import { takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure, getCategoriesSuccess, getCategoriesFailure, getProductSuccess, getProductFailure } from '../actions/actionCreators';
import { GET_PRODUCTS_REQUEST, GET_CATEGORIES_REQUEST, CHANGE_GET_PRODUCTS_REQUEST, GET_PRODUCT_REQUEST } from '../actions/actionTypes';
import { getProducts, getProduct, getCategories } from '../api/index';


// worker товар
function* handleGetProductSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, getProduct, action.payload.id);
        yield put(getProductSuccess(data));
    } catch (e) {
        yield put(getProductFailure(e.message));
    }
}

// watcher товар
function* watchGetProductSaga() {
    yield takeLatest(GET_PRODUCT_REQUEST, handleGetProductSaga);
}

// worker товары
function* handleGetProductsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, getProducts, action.payload.requestParams);
        yield put(getProductsSuccess(data));
    } catch (e) {
        yield put(getProductsFailure(e.message));
    }
}

// watcher товары
function* watchGetProductsSaga() {
    yield takeLatest(GET_PRODUCTS_REQUEST, handleGetProductsSaga);
}

// watcher запроса
function* watchChangeGetProductsRequestSaga() {
    yield takeLatest(CHANGE_GET_PRODUCTS_REQUEST, handleGetProductsSaga);
}

// worker категории
function* handleGetCategoriesSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, getCategories);
        yield put(getCategoriesSuccess(data));
    } catch (e) {
        yield put(getCategoriesFailure(e.message));
    }
}

// watcher категории
function* watchGetCategoriesSaga() {
    yield takeLatest(GET_CATEGORIES_REQUEST, handleGetCategoriesSaga);
}


export default function* saga() {
    yield spawn(watchGetProductSaga);
    yield spawn(watchGetProductsSaga);
    yield spawn(watchGetCategoriesSaga);
    yield spawn(watchChangeGetProductsRequestSaga);
}