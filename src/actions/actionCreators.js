import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_SUCCESS,
    CHANGE_GET_PRODUCTS_REQUEST,
    ADD_PRODUCT_TO_CART,
    GET_TOP_SALES_REQUEST,
    GET_TOP_SALES_FAILURE,
    GET_TOP_SALES_SUCCESS
  } from './actionTypes';
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

  export const getCategoriesRequest = () => ({
    type: GET_CATEGORIES_REQUEST,
  });
  
  export const getCategoriesFailure = errorItem => ({
    type: GET_CATEGORIES_FAILURE,
    payload: {errorItem},
  });

  export const getCategoriesSuccess = categories => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: {categories},
  });

  export const changeGetProductsRequest = requestParams => {
    let fromStor = {...store.getState().products.requestParams};
    return {
    type: CHANGE_GET_PRODUCTS_REQUEST,
    payload: {requestParams: {...fromStor, ...requestParams}},
    }
  };

  export const addProductToCart = product => ({
    type: ADD_PRODUCT_TO_CART,
    payload: {product},
  });
  