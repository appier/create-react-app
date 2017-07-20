import { createStore, applyMiddleware } from 'redux';
import rootReducers from 'reducers/';
import middleware from 'middleware/';

const enhancer = applyMiddleware(...middleware);

export default function configure(preloadedState) {
  const store = createStore(rootReducers, preloadedState, enhancer);

  if (module.hot) {
    module.hot.accept('reducers/', () => {
      const nextRootReducer = require('reducers/').default;
      console.log(Date.now(), 'store hot');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
