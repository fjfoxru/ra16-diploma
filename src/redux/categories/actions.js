import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_SUCCESS,
  } from './types';
  import store from '../store';

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