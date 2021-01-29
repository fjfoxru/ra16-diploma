import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    product: {},
    loading: false,
    error: null,
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_PRODUCT_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case GET_PRODUCT_SUCCESS:
        const {product} = action.payload;
        return {
          ...state,
          product,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  }