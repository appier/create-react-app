import { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
}
