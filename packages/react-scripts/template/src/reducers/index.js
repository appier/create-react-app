import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import auth from './auth';
import middleware from '../middleware/';

const reducers = combineReducers({
  routing: routerReducer,
  auth,
});

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && window.devToolsExtension()
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
