import React from 'react';
import PropTypes from 'prop-types';
import CMSButton from '../../../util/Button';
import Nav from '../../../util/Nav';
import { getCreateMeasureVersionRoute, getCreateMeasureDraftRoute } from '../../../../utils/routes';

const versionButtonStyle = {
  color: 'goldenrod',
};

class VersionOrDraft extends React.Component {
  render() {
    return (
      this.props.measure.isDraft
        ? (
          <Nav to={getCreateMeasureVersionRoute(this.props.measure.id)}>
            <CMSButton variation="transparent" style={versionButtonStyle} label="" icon="star" />
          </Nav>
        )
        : (
          <Nav to={getCreateMeasureDraftRoute(this.props.measure.id)}>
            <CMSButton variation="transparent" label="" icon={['far', 'edit']} />
          </Nav>
        )

    );
  }
}

VersionOrDraft.propTypes = {
  measure: PropTypes.object.isRequired,
};

export default VersionOrDraft;
