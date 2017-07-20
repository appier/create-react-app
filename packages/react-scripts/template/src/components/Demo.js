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
    const { loading } = this.props;

    return (
      <p>
        {loading && <i>Loading...</i>}
      </p>
    );
  }
}

export default connect(
  reducers => ({
    loading: reducers.auth.get('loading', false),
  }),
  {
    login,
  }
)(Demo);
