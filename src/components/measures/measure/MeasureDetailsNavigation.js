import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Collapse, Nav, NavItem, NavLink,
} from 'reactstrap';

const StyledNav = styled(Nav).attrs({
  className: 'ds-u-fill--background',
})`
  width: 300px
`;

class MeasureDetailsNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(
      prevState => ({ collapse: !prevState.collapse }),
    );
  }

  render() {
    const measureId = this.props.match.params.id;
    const baseUrl = `/app/measures/${measureId}/details`;
    const generalInformationUrl = `${baseUrl}/generalinformation`;
    const stewardUrl = `${baseUrl}/steward`;
    const descriptionUrl = `${baseUrl}/description`;
    const copyrightUrl = `${baseUrl}/copyright`;
    const measureTypeUrl = `${baseUrl}/measuretype`;
    const stratificationUrl = `${baseUrl}/stratification`;
    const riskAdjustmentUrl = `${baseUrl}/riskadjustment`;
    const rateAggregationUrl = `${baseUrl}/rateaggregation`;
    const rationaleUrl = `${baseUrl}/rationale`;
    const clinicalRecommendationUrl = `${baseUrl}/clinicalrecommendation`;
    const improvementNotationUrl = `${baseUrl}/improvementnotation`;
    const referencesUrl = `${baseUrl}/references`;
    const definitionUrl = `${baseUrl}/definition`;
    const guidanceUrl = `${baseUrl}/guidance`;
    const transmissionUrl = `${baseUrl}/transmission`;
    const initialPopulationUrl = `${baseUrl}/initialpopulation`;
    const supplementalDataUrl = `${baseUrl}/supplementaldata`;
    const measureSetUrl = `${baseUrl}/measureset`;
    return (
      <div>
        <StyledNav vertical>
          <Link to={`${generalInformationUrl}`}>
            <NavItem>
              <NavLink>General Measure Information</NavLink>
            </NavItem>
          </Link>

          <Link to={`${stewardUrl}`}>
            <NavItem>
              <NavLink>Measure Steward/Developer</NavLink>
            </NavItem>
          </Link>

          <Link to={`${descriptionUrl}`}>
            <NavItem>
              <NavLink>Description</NavLink>
            </NavItem>
          </Link>

          <Link to={`${copyrightUrl}`}>
            <NavItem>
              <NavLink>Copyright</NavLink>
            </NavItem>
          </Link>

          <Link to={`${measureTypeUrl}`}>
            <NavItem>
              <NavLink>Measure Type</NavLink>
            </NavItem>
          </Link>

          <Link to={`${stratificationUrl}`}>
            <NavItem>
              <NavLink>Stratification</NavLink>
            </NavItem>
          </Link>

          <Link to={`${riskAdjustmentUrl}`}>
            <NavItem>
              <NavLink>Risk Adjustment</NavLink>
            </NavItem>
          </Link>

          <Link to={`${rateAggregationUrl}`}>
            <NavItem>
              <NavLink>Rate Aggregation</NavLink>
            </NavItem>
          </Link>

          <Link to={`${rationaleUrl}`}>
            <NavItem>
              <NavLink>Rationale</NavLink>
            </NavItem>
          </Link>

          <Link to={`${clinicalRecommendationUrl}`}>
            <NavItem>
              <NavLink>Clinical Recommendation</NavLink>
            </NavItem>
          </Link>

          <Link to={`${improvementNotationUrl}`}>
            <NavItem>
              <NavLink>Improvement Notation</NavLink>
            </NavItem>
          </Link>

          <Link to={`${referencesUrl}`}>
            <NavItem>
              <NavLink>References</NavLink>
            </NavItem>
          </Link>

          <Link to={`${definitionUrl}`}>
            <NavItem>
              <NavLink>Definition</NavLink>
            </NavItem>
          </Link>

          <Link to={`${guidanceUrl}`}>
            <NavItem>
              <NavLink>Guidance</NavLink>
            </NavItem>
          </Link>

          <Link to={`${transmissionUrl}`}>
            <NavItem>
              <NavLink>Transmission</NavLink>
            </NavItem>
          </Link>

          <NavItem>
            <NavLink onClick={this.toggle}>Populations</NavLink>

            <Collapse isOpen={this.state.collapse}>
              <Link to={`${initialPopulationUrl}`}>
                <NavItem>
                  {/* TODO style the nested navlink */}
                  <NavLink>Initial Population</NavLink>
                </NavItem>
              </Link>
            </Collapse>
          </NavItem>

          <Link to={`${supplementalDataUrl}`}>
            <NavItem>
              <NavLink>Supplemental Data Elements</NavLink>
            </NavItem>
          </Link>

          <Link to={`${measureSetUrl}`}>
            <NavItem>
              <NavLink>Measure Set</NavLink>
            </NavItem>
          </Link>
        </StyledNav>
      </div>
    );
  }
}

MeasureDetailsNavigation.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(MeasureDetailsNavigation);
