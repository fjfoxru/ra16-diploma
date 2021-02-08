import { takeLatest, put, retry } from 'redux-saga/effects';
import { getProductSuccess, getProductFailure } from './actions';
import { GET_PRODUCT_REQUEST } from './types';
import { getProduct } from '../../utils/api';

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
export function* watchGetProductSaga() {
    yield takeLatest(GET_PRODUCT_REQUEST, handleGetProductSaga);
}