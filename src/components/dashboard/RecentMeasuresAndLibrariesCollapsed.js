import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
} from 'reactstrap';
import { withRouter } from 'react-router';
import { setCurrentMeasureId } from '../../actions/measure-actions';
import { setCurrentLibraryId } from '../../actions/library-actions';

class RecentMeasuresAndLibrariesCollapsed extends React.Component {
  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
    this.navigateToMeasure = this.navigateToMeasure.bind(this);
    this.navigateToLibrary = this.navigateToLibrary.bind(this);
    this.toggleMeasure = this.toggleMeasure.bind(this);
    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.state = {
      measureDropdownOpen: false,
      libraryDropdownOpen: false,
    };
  }

  navigateToMeasure(id) {
    this.props.setCurrentMeasureId(id);
    this.navigateTo(`/app/measures/${id}`);
  }

  navigateToLibrary(id) {
    this.props.setCurrentLibraryId(id);
    this.navigateTo(`/app/libraries/${id}`);
  }

  navigateTo(uri) {
    this.props.history.push(uri);
  }

  toggleMeasure() {
    this.setState(prevState => ({ measureDropdownOpen: !prevState.measureDropdownOpen }));
  }

  toggleLibrary() {
    this.setState(prevState => ({ libraryDropdownOpen: !prevState.libraryDropdownOpen }));
  }

  render() {
    return (
      <div className="recentActivityCollapsed">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle title="Click to show Recent Libraries" className="dropDownIcon" caret>
            <FontAwesomeIcon icon="ruler" />
          </DropdownToggle>
          <DropdownMenu>
            {this.props.recentMeasures.measures.slice(0, 5).map((measure) => {
              return (
                <DropdownItem key={measure.id} className="recentActivityListGroup" onClick={() => this.navigateToMeasure(measure.id)}>
                  { `${measure.name} v${measure.version}` }
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle title="Click to show Recent Libraries" className="dropDownIcon" caret>
            <FontAwesomeIcon icon="book-reader" />
          </DropdownToggle>
          <DropdownMenu>
            {this.props.recentLibraries.libraries.slice(0, 5).map((library) => {
              return (
                <DropdownItem key={library.id} className="recentActivityListGroup" onClick={() => this.navigateToLibrary(library.id)}>
                  { `${library.name} v${library.version}` }
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recentMeasures: state.recentMeasures,
  recentLibraries: state.recentLibraries,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCurrentMeasureId, setCurrentLibraryId }, dispatch);
};

RecentMeasuresAndLibrariesCollapsed.propTypes = {
  history: PropTypes.object.isRequired,
  recentMeasures: PropTypes.object.isRequired,
  recentLibraries: PropTypes.object.isRequired,
  setCurrentMeasureId: PropTypes.func.isRequired,
  setCurrentLibraryId: PropTypes.func.isRequired,
};

export default
connect(mapStateToProps, mapDispatchToProps)(withRouter(RecentMeasuresAndLibrariesCollapsed));
