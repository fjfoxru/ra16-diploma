import {
    ADD_PRODUCT_TO_CART,
  } from './types'
  
  const initialState = {
    products: [],
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:
          const {product} = action.payload;
          const products = [...state.products];
          let indexProductInCart = products.findIndex(productIncart => productIncart.data.id === product.data.id && productIncart.size === product.size);
          if (indexProductInCart === -1) {
            products.push(product);
          } else {
            products[indexProductInCart].count += product.count;
          }
        return {
          ...state,
          products,
        };
      default:
        return state;
    }
  }