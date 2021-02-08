import { takeLatest, put, retry } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure} from './actions';
import { GET_PRODUCTS_REQUEST, CHANGE_GET_PRODUCTS_REQUEST } from './types';
import { getProducts } from '../../utils/api';


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
export function* watchGetProductsSaga() {
    yield takeLatest(GET_PRODUCTS_REQUEST, handleGetProductsSaga);
}

// watcher запроса
export function* watchChangeGetProductsRequestSaga() {
    yield takeLatest(CHANGE_GET_PRODUCTS_REQUEST, handleGetProductsSaga);
}