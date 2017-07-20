import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { login } from 'reducers/auth';

class Demo extends PureComponent {
  static defaultProps = {
    loading: false,
    login() {},
  };
  componentDidMount() {
    this.props.login();
  }
  render() {
    const { loading, test } = this.props;

    return (
      <p>
        <i>{test}</i>
        {loading && <i>Loading...</i>}
        ---
        <i>component03</i>
      </p>
    );
  }
}

export default connect(
  reducers => ({
    loading: reducers.auth.get('loading', false),
    test: reducers.auth.get('test'),
  }),
  {
    login,
  }
)(Demo);
