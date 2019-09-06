import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../util/Spinner';

class Home extends React.Component {
  componentWillMount() {
    this.props.history.replace('/app');
  }

  render() {
    return (
      <Spinner />
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
