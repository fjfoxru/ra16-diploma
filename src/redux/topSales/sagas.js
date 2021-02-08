import { takeLatest, put, retry } from 'redux-saga/effects';
import { getTopSalesFailure, getTopSalesSuccess } from './actions';
import { GET_TOP_SALES_REQUEST } from './types';
import { getTopSales } from '../../utils/api';

// worker top sales
function* handleGetTopSalesSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, getTopSales);
        yield put(getTopSalesSuccess(data));
    } catch (e) {
        yield put(getTopSalesFailure(e.message));
    }
}

// watcher top sales
export function* watchGetTopSalesSaga() {
    yield takeLatest(GET_TOP_SALES_REQUEST, handleGetTopSalesSaga);
}