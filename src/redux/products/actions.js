import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    CHANGE_GET_PRODUCTS_REQUEST,
  } from './types';
  import store from '../store';
  
  export const getProductsRequest = () => ({
    type: GET_PRODUCTS_REQUEST,
    payload: {},
  });
  
  export const getProductsFailure = errorItem => ({
    type: GET_PRODUCTS_FAILURE,
    payload: {errorItem},
  });
  
  export const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: {products},
  });
  export const changeGetProductsRequest = requestParams => {
    let fromStor = {...store.getState().products.requestParams};
    return {
    type: CHANGE_GET_PRODUCTS_REQUEST,
    payload: {requestParams: {...fromStor, ...requestParams}},
    }
  };