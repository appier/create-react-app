import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerReducer } from 'react-router-redux'
import auth from './auth';
import middleware from '../middleware/';

const reducers = combineReducers({
  routing: routerReducer,
  auth,
});

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware)
);

export default function configure(initialState) {
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./', () => {
      const nextReducer = require('./').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
