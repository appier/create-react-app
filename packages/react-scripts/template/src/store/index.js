import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducers from 'ducks';
import history from './history';

const router = routerMiddleware(history);
const enhancer = applyMiddleware([thunk, router]);

export default function configure(preloadedState) {
  const store = createStore(rootReducers, preloadedState, enhancer);

  if (module.hot) {
    module.hot.accept('ducks/', () => {
      store.replaceReducer(rootReducers);
    });
  }

  return store;
}
