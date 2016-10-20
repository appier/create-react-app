import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import classnames from 'classnames/bind';
import { pure, compose, setDisplayName } from 'recompose';
import * as AuthActions from './ducks/auth';
import logo from './logo.svg';
import style from './App.css';

const cx = classnames.bind(style);
const enhanced = compose(
  setDisplayName('App'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  pure
);

export const App = props => (
  <div className={cx('App')}>
    <div className={cx('App-header')}>
      <img src={logo} className={cx('App-logo')} alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className={cx('App-intro')}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <code>
      <a href="https://github.com/appier/create-react-app" target="_blank">Appier edition.</a>
    </code>
  </div>
);

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(AuthActions, dispatch),
    },
  };
}

export default enhanced(App);
