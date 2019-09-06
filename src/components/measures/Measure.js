import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Alert } from '@cmsgov/design-system-core';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMeasureInformationById, setCurrentMeasureId } from '../../actions/measure-actions';
import MeasureDashboard from './measure/MeasureDashboard';
import MeasureDetails from './measure/MeasureDetails';
import CQLWorkspace from './measure/CQLWorkspace';
import PopulationWorkspace from './measure/PopulationWorkspace';
import MeasurePackager from './measure/MeasurePackager';
import MeasureExport from './measure/MeasureExport';
import MeasureHistory from './measure/MeasureHistory';
import MeasureShare from './measure/MeasureShare';
import MeasureVersion from './measure/MeasureVersion';
import MeasureDraft from './measure/MeasureDraft';
import MeasureClone from './measure/MeasureClone';
import MeasureTabs from './measure/MeasureTabs';
import Spinner from '../util/Spinner';

class Measure extends React.Component {
  async componentWillMount() {
    const measureId = this.props.match.params.id;
    this.props.setCurrentMeasureId(measureId);
    await this.props.getMeasureInformationById(measureId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentMeasure.id !== prevProps.currentMeasure.id) {
      this.props.getMeasureInformationById(this.props.currentMeasure.id);
    }
  }

  render() {
    if (this.props.currentMeasure.isFetching === true) {
      return (
        <Spinner />
      );
    }
    if (this.props.currentMeasure.error.statusCode === 404) {
      return (
        <div>
          <MeasureTabs />
          <Alert heading="Measure Not Found" variation="error" role="alert" />
        </div>
      );
    }

    return (
      <div>
        <Switch>
          <div>
            <Route exact path="/app/measures/:id" component={MeasureDashboard} />
            <Route exact path="/app/measures/:id/dashboard" component={MeasureDashboard} />
            <Route path="/app/measures/:id/details" component={MeasureDetails} />
            <Route exact path="/app/measures/:id/cqlworkspace" component={CQLWorkspace} />
            <Route exact path="/app/measures/:id/populationworkspace" component={PopulationWorkspace} />
            <Route exact path="/app/measures/:id/measurepackager" component={MeasurePackager} />
            <Route path="/app/measures/:id/export" component={MeasureExport} />
            <Route path="/app/measures/:id/history" component={MeasureHistory} />
            <Route path="/app/measures/:id/share" component={MeasureShare} />
            <Route path="/app/measures/:id/version" component={MeasureVersion} />
            <Route path="/app/measures/:id/draft" component={MeasureDraft} />
            <Route path="/app/measures/:id/clone" component={MeasureClone} />
          </div>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.currentUser,
    currentMeasure: state.currentMeasure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCurrentMeasureId, getMeasureInformationById }, dispatch);
};

Measure.propTypes = {
  getMeasureInformationById: PropTypes.func.isRequired,
  currentMeasure: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  setCurrentMeasureId: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Measure);
