import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRecentMeasures } from '../../actions/recent-measures-actions';
import SearchComponent from './measure/search/SearchComponent';
import MeasureResultTable from './measure/search/MeasureResultTable';
import { searchMeasures } from '../../actions/measure-search-actions';


class Measures extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      myMeasures: true,
    };
  }

  async componentWillMount() {
    await this.props.getRecentMeasures();
    await this.props.searchMeasures(this.props.measureSearchResults.searchText,
      this.props.measureSearchResults.myMeasures,
      `${this.props.user.firstName} ${this.props.user.lastName}`);
  }

  toggle() {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  }

  toggleMyMeasures() {
    this.setState(prevState => ({ myMeasures: !prevState.myMeasures }));
  }

  render() {
    return (
      <div>
        <MeasureResultTable tableTitle="Recent Measures" showOnly={2} measureResults={this.props.recentMeasures.measures} />
        <SearchComponent />
        <MeasureResultTable tableTitle="Measure Search Results" measureResults={this.props.measureSearchResults.measureSearchResults} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.currentUser,
    measureSearchResults: state.measureSearchResults,
    recentMeasures: state.recentMeasures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchMeasures, getRecentMeasures }, dispatch);
};

Measures.propTypes = {
  user: PropTypes.object.isRequired,
  searchMeasures: PropTypes.func.isRequired,
  getRecentMeasures: PropTypes.func.isRequired,
  measureSearchResults: PropTypes.object.isRequired,
  recentMeasures: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Measures);
