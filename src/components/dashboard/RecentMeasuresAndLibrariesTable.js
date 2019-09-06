import React from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ListGroup, ListGroupItem,
} from 'reactstrap';
import RecentMeasuresAndLibrariesExpanded from './RecentMeasuresAndLibrariesExpanded';
import RecentMeasuresAndLibrariesCollapsed from './RecentMeasuresAndLibrariesCollapsed';

class RecentMeasuresAndLibrariesTable extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  }

  render() {
    return (
      <div>

        {this.state.collapse
          ? (
            <ListGroup className="recentActivityCollapsed ds-c-list ds-c-list--bare" aria-labelledby="unordered-list-id">
              <ListGroupItem className="recentActivityListGroup" id="unordered-list-id">
                <FontAwesomeIcon title="Expand Recent Activity Center" onClick={() => this.toggle()} icon="angle-double-right" className="fa-2x" />
              </ListGroupItem>
              <RecentMeasuresAndLibrariesCollapsed />
            </ListGroup>
          )
          : (
            <ListGroup className="ds-c-list ds-c-list--bare" aria-labelledby="unordered-list-id">
              <ListGroupItem className="recentActivityListGroup" id="unordered-list-id">
                <FontAwesomeIcon title="Collapse Recent Activity Center" onClick={() => this.toggle()} icon="angle-double-left" className="recentActivityHeaderIconExpanded fa-2x" />
              </ListGroupItem>
              <RecentMeasuresAndLibrariesExpanded />
            </ListGroup>
          )
        }
      </div>
    );
  }
}

export default (withRouter(RecentMeasuresAndLibrariesTable));
