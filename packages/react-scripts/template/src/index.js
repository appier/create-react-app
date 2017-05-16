import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';
import createStore from './reducers/';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
