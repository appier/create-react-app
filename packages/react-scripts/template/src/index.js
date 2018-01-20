import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Routing from './components/Routing';
import configure from './store';
import history from './store/history';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routing />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/2vJdu84
serviceWorker.unregister();
