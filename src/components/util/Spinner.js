import React from 'react';
import { Spinner as CMSSpinner } from '@cmsgov/design-system-core';


const divStyle = {
  width: '100%',
  height: '500px',
};

const spinnerStyle = {
  marginTop: '20%',
  marginLeft: '48%',
};

class Spinner extends React.Component {
  render() {
    return (
      <div style={divStyle} className="ds-u-display--inline-block ds-u-padding--2">
        <div style={spinnerStyle}>
          <CMSSpinner size="big" className="ds-u-valign--middle" />
        </div>
      </div>
    );
  }
}

export default Spinner;
