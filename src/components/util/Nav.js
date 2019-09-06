import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** This is a higher order component to aid in navigation */
class Nav extends React.Component {
  onKeyPress(event) {
    if (event.key === 13) {
      this.navigate();
    }
  }

  navigate() {
    this.props.history.push(this.props.to);
  }

  render() {
    return (
      <div onClick={() => this.navigate()} onKeyPress={this.onKeyPress} tabIndex={-1} role="link">
        {this.props.children}
      </div>
    );
  }
}

Nav.propTypes = {
  /** uri to navigate to */
  to: PropTypes.string.isRequired,
  /** element(s) that should be used in navigation */
  children: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Nav);
