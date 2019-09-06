import React from 'react';
import PropTypes from 'prop-types';
import * as loginUtil from '../../utils/login-util';
import Spinner from '../util/Spinner';

class Login extends React.Component {
  componentWillMount() {
    this.props.history.replace(loginUtil.redirectToLoginPage());
  }

  render() {
    return (
      <Spinner />
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
