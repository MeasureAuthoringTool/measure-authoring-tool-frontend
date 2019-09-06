import React from 'react';
import { Button as CMSButton } from '@cmsgov/design-system-core';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A wrapper class around the CMS Button. This wrapper allows a label, icon, iconSide button type,
 * and button variant to be passed to the component.
 */
class Button extends React.Component {
  render() {
    let fontAwesomeIconClassName = 'ds-u-margin-right--1';
    if (this.props.iconSide === 'right') {
      fontAwesomeIconClassName = 'ds-u-margin-left--1';
    }

    return (
      <CMSButton
        className={this.props.className}
        style={this.props.style}
        onClick={this.props.onClick}
        variation={this.props.variation}
        disabled={this.props.disabled}
        type={this.props.type}
      >
        {this.props.iconSide === 'left'
          && <FontAwesomeIcon icon={this.props.icon} className={fontAwesomeIconClassName} />
        }
        <span>{this.props.label}</span>
        {this.props.iconSide === 'right'
          && <FontAwesomeIcon icon={this.props.icon} className={fontAwesomeIconClassName} />
        }
      </CMSButton>
    );
  }
}

Button.defaultProps = {
  icon: '',
  iconSide: 'left',
  onClick: () => {},
  type: 'button',
  variation: '',
  disabled: false,
  className: '',
  style: {},
};

Button.propTypes = {
  /**  Disables the button if true */
  disabled: PropTypes.bool,
  /** The font awesome icon to be displayed, none will be displayed if this value is empty */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The side the icon should be displayed on, right by default. Should be either left or right */
  iconSide: PropTypes.oneOf(['left', 'right']),
  /** The label for the button */
  label: PropTypes.string.isRequired,
  /** The onClick handler */
  onClick: PropTypes.func,
  /** The type of the button, should be either button or  submit. By default it is button. */
  type: PropTypes.oneOf(['button', 'submit']),
  /*
   * The variation of the button, should be either primary, danger, success, transparent.
   * By default there is not variation.
   */
  variation: PropTypes.oneOf(['primary', 'danger', 'success', 'transparent']),
  /** The  className you would like to add to the button, none will be added if the value
   * is empty
  */
  className: PropTypes.string,
  /** The  style you would like to add to the button, none will be added if the value
   * is empty
  */
  style: PropTypes.object,
};

export default Button;
