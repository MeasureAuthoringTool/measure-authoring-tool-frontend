
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getAPIInformation } from '../../actions/api-actions';
import { getRecentMeasures } from '../../actions/recent-measures-actions';
import { getRecentLibraries } from '../../actions/recent-libraries-actions';
import MiddlePanel from './MiddlePanel';
import RecentMeasuresAndLibrariesTable from './RecentMeasuresAndLibrariesTable';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toMeasure = this.toMeasure.bind(this);
    this.toLibrary = this.toLibrary.bind(this);
    this.toMeasures = this.toMeasures.bind(this);
    this.toLibraries = this.toLibraries.bind(this);
  }

  async componentDidMount() {
    await this.props.getAPIInformation();
    await this.props.getRecentMeasures();
    await this.props.getRecentLibraries();
  }

  toMeasure() {
    this.props.history.push('/app/measures/1');
  }

  toLibrary() {
    this.props.history.push('/app/libraries/1');
  }

  toMeasures() {
    this.props.history.push('/app/measures');
  }

  toLibraries() {
    this.props.history.push('/app/libraries');
  }

  render() {
    return (
      <section className="ds-xl-container">
        <div className="ds-l-row">
          <div className="ds-l-col--2">
            <RecentMeasuresAndLibrariesTable />
          </div>
          <div className="ds-l-col--8">
            <MiddlePanel />
          </div>
          <div className="ds-l-col--2">
            <article />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  apiInformation: state.apiInformation,
  recentMeasures: state.recentMeasures,
  recentLibraries: state.recentLibraries,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAPIInformation,
  getRecentMeasures,
  getRecentLibraries,
}, dispatch);

Dashboard.propTypes = {
  getAPIInformation: PropTypes.func.isRequired,
  getRecentMeasures: PropTypes.func.isRequired,
  getRecentLibraries: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
