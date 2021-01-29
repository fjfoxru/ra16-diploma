import {
    ADD_PRODUCT_TO_CART,
  } from '../actions/actionTypes'
  
  const initialState = {
    products: [],
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:
          const {product} = action.payload;
          let sameInStore = state.products.findIndex(productInStor => productInStor.id === product.id);
          if (sameInStore === -1) {
            state.products.push(product);
          } else {
            let allSameProducts = state.products.filter(el => el.id === product.id);
            if (!allSameProducts.some(el => el.size == product.size)) {
               state.products.push(product);
            } else {
                console.log(allSameProducts.find(el => el.size == product.size));
            }
          }
        return {
          ...state,
        };
      default:
        return state;
    }
  }