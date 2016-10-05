import { createStore, applyMiddleware, compose } from 'redux';
import middleware from 'middleware/';
import ducks from 'ducks/';

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && window.devToolsExtension()
);

export default function configure(initialState) {
  const store = createStore(ducks, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('ducks/', () => {
      const nextReducer = require('ducks/').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
