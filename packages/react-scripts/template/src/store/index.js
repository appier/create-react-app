import { createStore, applyMiddleware } from 'redux';
import rootReducers from 'reducers/';
import middleware from 'middleware/';

const enhancer = applyMiddleware(...middleware);

export default function configure(preloadedState) {
  const store = createStore(rootReducers, preloadedState, enhancer);

  if (module.hot) {
    module.hot.accept('reducers/', () => {
      store.replaceReducer(rootReducers);
    });
  }

  return store;
}
