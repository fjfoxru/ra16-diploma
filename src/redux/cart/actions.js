import {
    ADD_PRODUCT_TO_CART,
  } from './types';
  import store from '../store';

  export const addProductToCart = product => ({
    type: ADD_PRODUCT_TO_CART,
    payload: {product},
  });
  