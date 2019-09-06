import React from 'react';
import PropTypes from 'prop-types';
import querystring from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { checkAccessTokenValidity, exchangeCodeForAccessToken } from '../../actions/auth-actions';
import Spinner from '../util/Spinner';


class Callback extends React.Component {
  async componentDidMount() {
    const values = querystring.parse(this.props.location.search);
    const code = values.code;
    await this.props.exchangeCodeForAccessToken(code);
    await this.props.checkAccessTokenValidity(this.props.accessToken.access_token);

    if (this.props.accessToken.isValid) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <Spinner />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.accessToken,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  checkAccessTokenValidity,
  exchangeCodeForAccessToken,
}, dispatch);

Callback.propTypes = {
  location: PropTypes.object.isRequired,
};

Callback.propTypes = {
  history: PropTypes.object.isRequired,
  accessToken: PropTypes.object.isRequired,
  checkAccessTokenValidity: PropTypes.func.isRequired,
  exchangeCodeForAccessToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
