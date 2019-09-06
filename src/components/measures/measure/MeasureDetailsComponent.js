import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../util/Button';

class MeasureDetailsComponent extends React.Component {
  render() {
    return (
      <div className="measureDetailsComponent">
        <h1 className="ds-u-color--primary">{this.props.title}</h1>
        {this.props.children}
        <div className="ds-u-float--right">
          <Button label="Save" type="button" variation="success" />
        </div>
      </div>
    );
  }
}

MeasureDetailsComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default MeasureDetailsComponent;
