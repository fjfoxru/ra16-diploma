import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cartReducer from './cart/reducer';
import productReducer from './product/reducer';
import productsReducer from './products/reducer';
import topsalesReducer from './topSales/reducer';
import categoriesReducer from './categories/reducer';
import saga from './sagas';

const reducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    products: productsReducer,
    categories: categoriesReducer,
    topsales: topsalesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;