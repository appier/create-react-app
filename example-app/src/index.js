import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';
import createStore from './reducers/';
import './index.css';

const store = createStore();
const history = syncHistoryWithStore(hashHistory, store);
const containerNode = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </AppContainer>,
  containerNode
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextRoutes = require('./Routes').default;

    ReactDOM.render(
      <AppContainer>
        <Provider store={store} history={history}>
          <NextRoutes history={history} />
        </Provider>
      </AppContainer>,
      containerNode
    );
  });
}
