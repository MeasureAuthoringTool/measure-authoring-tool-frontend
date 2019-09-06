import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import store from '../../store/index';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (store.getState().accessToken.isValid ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
      }
    />
  );
}

PrivateRoute.propTypes = {
  location: PropTypes.object.isRequired,
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
