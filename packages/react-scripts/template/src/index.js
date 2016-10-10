import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import createStore from './store'
import './index.css';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default;

    ReactDOM.render(
      <AppContainer>
        <Provider store={store} history={history}>
          <NextRoutes history={history} />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
