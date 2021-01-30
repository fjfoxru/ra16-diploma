import {
    GET_TOP_SALES_REQUEST,
    GET_TOP_SALES_FAILURE,
    GET_TOP_SALES_SUCCESS
  } from '../actions/actionTypes'
  
  const initialState = {
    products: [],
    requestParams: {},
    loading: false,
    error: null,
  };
  
  export default function topsalesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_TOP_SALES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_TOP_SALES_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case GET_TOP_SALES_SUCCESS:
        const {products} = action.payload;
        return {
          ...state,
          products,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  }