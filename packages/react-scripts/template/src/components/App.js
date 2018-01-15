import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import classnames from 'classnames/bind';
import logo from 'assets/logo.svg';
import style from './App.css';

const cx = classnames.bind(style);

class App extends PureComponent {
  render() {
    return (
      <div className={cx('App')}>
        <div className={cx('header')}>
          <img src={logo} className={cx('logo')} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={cx('intro')}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <code>
          <a
            href="https://github.com/appier/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Appier Edition.
          </a>
        </code>
      </div>
    );
  }
}

export default hot(module)(App);
