import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_CATEGORIES_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case GET_CATEGORIES_SUCCESS:
        let {categories} = action.payload;
        categories.push({title: 'Все', categoryId: null});
        return {
          ...state,
          categories,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  }