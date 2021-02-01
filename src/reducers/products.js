import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    CHANGE_GET_PRODUCTS_REQUEST,
  } from '../actions/actionTypes'
  
  const initialState = {
    products: [],
    requestParams: {offset: 0},
    loading: false,
    error: null,
  };
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_PRODUCTS_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case GET_PRODUCTS_SUCCESS:
        const {products} = action.payload;
        return {
          ...state,
          products,
          loading: false,
          error: null,
        };
      case CHANGE_GET_PRODUCTS_REQUEST:
        const {requestParams} = action.payload;
        const nowInState = {...state.requestParams};
          return {
            ...state,
            requestParams: {...nowInState, ...requestParams},
          };     
      default:
        return state;
    }
  }