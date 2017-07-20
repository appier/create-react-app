import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';
import createStore from 'store/';
import history from 'store/history';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');
const store = createStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootElement
  );
};

render(App);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('containers/App', () => {
    render(App);
  });
}
