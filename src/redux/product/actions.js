import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
  } from './types';
  import store from '../store';
  
  export const getProductRequest = id => ({
    type: GET_PRODUCT_REQUEST,
    payload: {id},
  });
  
  export const getProductFailure = errorItem => ({
    type: GET_PRODUCT_FAILURE,
    payload: {errorItem},
  });
  
  export const getProductSuccess = product => ({
    type: GET_PRODUCT_SUCCESS,
    payload: {product},
  });