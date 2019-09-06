import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router';
import CMSButton from '../../../util/Button';
import Nav from '../../../util/Nav';
import {
  getMeasureRoute, getMeasureHistoryRoute, getMeasureCloneRoute,
} from '../../../../utils/routes';
import VersionOrDraft from './VersionOrDraft';

const cmsButtonStyle = {
  borderColor: 'transparent',
};


const editMeasureButtonStyle = {
  color: 'darkgoldenrod',
};

const shareMeasureButtonStyle = {
  color: 'darkseagreen',
};

const headerStyle = {
  backgroundColor: '#f1f1f1',
  marginBottom: '0px',
  paddingBottom: '10px',
};

const tdStyle = {
  padding: '.3em',
};

class SearchResultTable extends React.Component {
  render() {
    return (
      <div id="searchResultsDiv" className="searchDiv">
        <div className="ds-h3" style={headerStyle}>{this.props.tableTitle}</div>
        <table className="ds-c-table ds-c-table--borderless">
          <thead>
            <tr>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Measure Name</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Version</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Create Version/Draft</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">History</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Edit</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Share</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Clone</th>
              <th style={tdStyle} className="ds-u-text-align--center" scope="col">Export</th>
            </tr>
          </thead>
          <tbody>
            {this.props.measureResults.slice(0, this.props.showOnly).map((measure) => {
              return (
                <tr key={measure.id} className="recentActivityListGroup">
                  <td style={tdStyle}>
                    <Nav to={getMeasureRoute(measure.id)}>
                      <Button color="link">{measure.name}</Button>
                    </Nav>
                  </td>
                  <td style={tdStyle} className="ds-u-text-align--center">{measure.version}</td>
                  <td style={tdStyle} className="ds-u-text-align--center">
                    <VersionOrDraft measure={measure} />
                  </td>
                  <td style={tdStyle} className="ds-u-text-align--center">
                    <Nav to={getMeasureHistoryRoute(measure.id)}>
                      <CMSButton variation="transparent" style={cmsButtonStyle} label="" icon={['far', 'clock']} />
                    </Nav>
                  </td>
                  <td style={tdStyle} className="ds-u-text-align--center">
                    <Nav to={getMeasureRoute(measure.id)}>
                      <CMSButton variation="transparent" style={editMeasureButtonStyle} label="" icon="pencil-alt" />
                    </Nav>
                  </td>
                  <td style={tdStyle} className="ds-u-text-align--center">
                    <CMSButton variation="transparent" style={shareMeasureButtonStyle} label="" icon="share-square" />
                  </td>
                  <td style={tdStyle} className="ds-u-text-align--center">
                    <Nav to={getMeasureCloneRoute(measure.id)}>
                      <CMSButton variation="transparent" style={cmsButtonStyle} label="" icon={['far', 'clone']} />
                    </Nav>
                  </td>
                  <td style={tdStyle} className="ds-u-text-align--center">
                    <Nav to={`measures/${measure.id}/export`}>
                      <CMSButton variation="transparent" style={cmsButtonStyle} label="" icon="download" />
                    </Nav>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

SearchResultTable.defaultProps = {
  showOnly: 25,
};

SearchResultTable.propTypes = {
  measureResults: PropTypes.array.isRequired,
  showOnly: PropTypes.number,
  tableTitle: PropTypes.string.isRequired,
};

export default
withRouter(SearchResultTable);
