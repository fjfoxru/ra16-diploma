import { takeLatest, put, retry } from 'redux-saga/effects';
import { getCategoriesSuccess, getCategoriesFailure } from './actions';
import { GET_CATEGORIES_REQUEST} from './types';
import { getCategories } from '../../utils/api';

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
export function* watchGetCategoriesSaga() {
    yield takeLatest(GET_CATEGORIES_REQUEST, handleGetCategoriesSaga);
}