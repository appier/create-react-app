import React, { Component } from 'react';
import App from './App';
import Home from './Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

class Routing extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default hot(module)(Routing);
