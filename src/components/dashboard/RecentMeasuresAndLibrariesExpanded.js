import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
} from 'reactstrap';
import { withRouter } from 'react-router';
import { setCurrentMeasureId } from '../../actions/measure-actions';
import { setCurrentLibraryId } from '../../actions/library-actions';

class RecentMeasuresAndLibrariesExpanded extends React.Component {
  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
    this.navigateToMeasure = this.navigateToMeasure.bind(this);
    this.navigateToLibrary = this.navigateToLibrary.bind(this);
    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  }

  render() {
    return (
      <div className="recentActivity">
        <ListGroup className="ds-c-list ds-c-list--bare" aria-labelledby="unordered-list-id">
          <ListGroupItem className="recentActivityHeader recentActivityListGroup ds-h3" id="unordered-list-id">
            Recent Measures
          </ListGroupItem>
          {this.props.recentMeasures.measures.slice(0, 5).map((measure) => {
            return (
              <ListGroupItem key={measure.id} className="recentActivityListGroup" onClick={() => this.navigateToMeasure(measure.id)}>
                <ListGroupItemHeading>{measure.name}</ListGroupItemHeading>
                <ListGroupItemText>
                  {`v${measure.version}`}
                </ListGroupItemText>
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <ListGroup className="ds-c-list ds-c-list--bare" aria-labelledby="unordered-list-id">
          <ListGroupItem className="recentActivityHeader recentActivityListGroup ds-h3" id="ordered-list-id">Recent Libraries</ListGroupItem>
          {this.props.recentLibraries.libraries.slice(0, 5).map((library) => {
            return (
              <ListGroupItem key={library.id} className="recentActivityListGroup" onClick={() => this.navigateToLibrary(library.id)}>
                <ListGroupItemHeading>{library.name}</ListGroupItemHeading>
                <ListGroupItemText>
                  {`v${library.version}`}

                </ListGroupItemText>
              </ListGroupItem>
            );
          })}
        </ListGroup>
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

RecentMeasuresAndLibrariesExpanded.propTypes = {
  history: PropTypes.object.isRequired,
  recentMeasures: PropTypes.object.isRequired,
  recentLibraries: PropTypes.object.isRequired,
  setCurrentMeasureId: PropTypes.func.isRequired,
  setCurrentLibraryId: PropTypes.func.isRequired,
};

export default
connect(mapStateToProps, mapDispatchToProps)(withRouter(RecentMeasuresAndLibrariesExpanded));
