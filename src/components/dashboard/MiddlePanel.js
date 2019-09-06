import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class MiddlePanel extends React.Component {
  constructor(props) {
    super(props);
    this.toMeasures = this.toMeasures.bind(this);
    this.toLibraries = this.toLibraries.bind(this);
    this.toNewMeasure = this.toNewMeasure.bind(this);
    this.toNewLibrary = this.toNewLibrary.bind(this);
  }

  toNewMeasure() {
    this.navigateTo('app/new/measure');
  }

  toMeasures() {
    this.props.history.push('/app/measures');
  }

  toLibraries() {
    this.props.history.push('/app/libraries');
  }

  toNewLibrary() {
    this.navigateTo('/app/new/library');
  }

  navigateTo(uri) {
    this.props.history.push(uri);
  }

  render() {
    return (
      <section className="ds-xl-container">
        <div className="ds-l-row">
          <div className="ds-l-col--12 ds-l-sm-col--2 ds-l-md-col--2 ds-l-lg-col--2 ds-l-xl-col--2 dashboardButtonElement">
            <button id="createMeasureButton" type="button" className="dashboardButton dashboardLabel">
              <FontAwesomeIcon icon="plus-circle" className="ds-u-color--primary-darkest fa-10x" onClick={this.toNewMeasure} />
              Create Measure
            </button>
          </div>
          <div className="ds-l-col--12 ds-l-sm-col--2 ds-l-md-col--2 ds-l-lg-col--2 ds-l-xl-col--2 dashboardButtonElement">
            <button type="button" className="dashboardButton dashboardLabel">
              <FontAwesomeIcon icon="folder-plus" className="ds-u-color--primary-darkest fa-10x" />
              Create Composite Measure
            </button>
          </div>
          <div className="ds-l-col--12 ds-l-sm-col--2 ds-l-md-col--2 ds-l-lg-col--2 ds-l-xl-col--2 dashboardButtonElement">
            <button type="button" className="dashboardButton dashboardLabel" onClick={this.toMeasures}>
              <FontAwesomeIcon icon="search" className="ds-u-color--primary-darkest fa-10x" />
              Search Measures
            </button>
          </div>
          <div className="ds-l-col--12 ds-l-sm-col--2 ds-l-md-col--2 ds-l-lg-col--2 ds-l-xl-col--2 dashboardButtonElement">
            <button type="button" className="dashboardButton dashboardLabel" onClick={this.toNewLibrary}>
              <FontAwesomeIcon icon="plus-square" className="ds-u-color--primary-darkest fa-10x" />
              Create Library
            </button>
          </div>
          <div className="ds-l-col--12 ds-l-sm-col--2 ds-l-md-col--2 ds-l-lg-col--2 ds-l-xl-col--2 dashboardButtonElement">
            <button type="button" className="dashboardButton dashboardLabel" onClick={this.toLibraries}>
              <FontAwesomeIcon icon="search" className="ds-u-color--primary-darkest fa-10x" />
              Search Library
            </button>
          </div>
          <div className="ds-l-col--12 ds-l-sm-col--2 ds-l-md-col--2 ds-l-lg-col--2 ds-l-xl-col--2 dashboardButtonElement">
            <button type="button" className="dashboardButton dashboardLabel">
              <FontAwesomeIcon icon="share-square" className="ds-u-color--primary-darkest fa-10x" />
              Create Bulk Export
            </button>
          </div>

        </div>
      </section>
    );
  }
}

MiddlePanel.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(MiddlePanel);
