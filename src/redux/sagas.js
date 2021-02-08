import { spawn } from 'redux-saga/effects';
import {watchGetProductSaga} from './product/sagas';
import {watchGetProductsSaga, watchChangeGetProductsRequestSaga} from './products/sagas';
import {watchGetCategoriesSaga} from './categories/sagas';
import {watchGetTopSalesSaga} from './topSales/sagas';

export default function* saga() {
    yield spawn(watchGetProductSaga);
    yield spawn(watchGetProductsSaga);
    yield spawn(watchGetCategoriesSaga);
    yield spawn(watchChangeGetProductsRequestSaga);
    yield spawn(watchGetTopSalesSaga);
}