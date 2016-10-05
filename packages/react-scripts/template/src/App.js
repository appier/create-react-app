import React, { Component } from 'react';
import classnames from 'classnames/bind';
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

export default App;
