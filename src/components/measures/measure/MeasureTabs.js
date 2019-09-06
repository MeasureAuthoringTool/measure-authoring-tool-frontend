import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@cmsgov/design-system-core';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class MeasureTabs extends React.Component {
  render() {
    const measureId = this.props.match.params.id;
    const measureDetailsRegex = /\/app\/measures\/.+\/details(\/.+)?/;
    return (
      <div className="ds-c-tabs" role="tablist">
        <Link to={`/app/measures/${measureId}/dashboard`}>
          <Tab id="measureDashboard" selected={this.props.location.pathname === `/app/measures/${measureId}/dashboard` || this.props.location.pathname === `/app/measures/${measureId}`}>Measure Dashboard</Tab>
        </Link>
        <Link to={`/app/measures/${measureId}/details`}>
          <Tab id="measureDetails" selected={measureDetailsRegex.test(this.props.location.pathname)}>Measure Details</Tab>
        </Link>
        <Link to={`/app/measures/${measureId}/cqlworkspace`}>
          <Tab id="cqlWorkspace" selected={this.props.location.pathname === `/app/measures/${measureId}/cqlworkspace`}>CQL Workspace</Tab>
        </Link>
        <Link to={`/app/measures/${measureId}/populationworkspace`}>
          <Tab id="populationWorkspace" selected={this.props.location.pathname === `/app/measures/${measureId}/populationworkspace`}>Population Workspace</Tab>
        </Link>
        <Link to={`/app/measures/${measureId}/measurepackager`}>
          <Tab id="measurePackager" selected={this.props.location.pathname === `/app/measures/${measureId}/measurepackager`}>Measure Packager</Tab>
        </Link>
      </div>
    );
  }
}

MeasureTabs.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MeasureTabs);
