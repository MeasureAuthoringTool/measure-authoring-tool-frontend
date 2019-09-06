import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// eslint-disable-next-line
 let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod'
 || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  devTools = a => a;
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    devTools,
  ),
);

export default store;
