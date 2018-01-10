import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from 'containers/App';
import createStore from 'store/';
import history from 'store/history';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');
const store = createStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
};

render(App);
registerServiceWorker();
