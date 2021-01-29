import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cartReducer from '../reducers/cart';
import productReducer from '../reducers/product';
import productsReducer from '../reducers/products';
import categoriesReducer from '../reducers/categories';
import saga from '../sagas';

const reducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    products: productsReducer,
    categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;