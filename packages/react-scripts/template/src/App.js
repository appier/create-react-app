import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames/bind';
import * as AuthActions from 'ducks/auth';
import logo from './logo.svg';
import style from './App.css';

const cx = classnames.bind(style);

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <div className={cx('App-header')}>
          <img src={logo} className={cx('App-logo')} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={cx('App-intro')}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
