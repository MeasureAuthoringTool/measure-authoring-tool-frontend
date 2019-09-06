import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MeasureTabs from './MeasureTabs';
import Button from '../../util/Button';

class MeasureDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }


  navigateTo(uri) {
    this.props.history.push(uri);
  }

  render() {
    const measureId = this.props.match.params.id;
    const baseUrl = `/app/measures/${measureId}`;
    return (
      <div>
        <MeasureTabs />
        <div>
          <div className="ds-l-row ds-u-justify-content--center">
            <div>
              <div className="ds-l-row ds-u-justify-content--center">
                <h1 className="ds-title">{this.props.currentMeasure.name}</h1>
              </div>
              <div className="ds-l-row ds-u-justify-content--center">
                <p className="ds-h3">{ `v${this.props.currentMeasure.version}` }</p>
              </div>
            </div>
          </div>
          <div className="ds-l-row ds-u-justify-content--center">
            <Button label="Version" icon="star" variation="primary" onClick={() => this.navigateTo(`${baseUrl}/version`)} />
            <Button label="Share" icon="share-alt" variation="primary" onClick={() => this.navigateTo(`${baseUrl}/share`)} />
            <Button label="Clone" icon="copy" variation="primary" />
            <Button label="Export" icon="cloud-download-alt" variation="primary" onClick={() => this.navigateTo(`${baseUrl}/export`)} />
            <Button label="History" icon="history" variation="primary" onClick={() => this.navigateTo(`${baseUrl}/history`)} />
            <Button label="Delete" icon="trash-alt" variation="danger" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentMeasure: state.currentMeasure,
  };
};

MeasureDashboard.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentMeasure: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(MeasureDashboard);
