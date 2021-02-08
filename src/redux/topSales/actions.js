import {
  GET_TOP_SALES_REQUEST,
  GET_TOP_SALES_FAILURE,
  GET_TOP_SALES_SUCCESS
} from './types';
import store from '../store';

export const getTopSalesRequest = () => ({
  type: GET_TOP_SALES_REQUEST,
  payload: {},
});

export const getTopSalesFailure = errorItem => ({
  type: GET_TOP_SALES_FAILURE,
  payload: {errorItem},
});

export const getTopSalesSuccess = products => ({
  type: GET_TOP_SALES_SUCCESS,
  payload: {products},
});