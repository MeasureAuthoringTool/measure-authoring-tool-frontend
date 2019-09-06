import React from 'react';
import { Switch, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import MeasureTabs from './MeasureTabs';
import MeasureDetailsNavigation from './MeasureDetailsNavigation';
import Steward from './measuredetails/Steward';
import Description from './measuredetails/Description';
import Copyright from './measuredetails/Copyright';
import MeasureType from './measuredetails/MeasureType';
import Stratification from './measuredetails/Stratification';
import RiskAdjustment from './measuredetails/RiskAdjustment';
import RateAggregation from './measuredetails/RateAggregation';
import Rationale from './measuredetails/Rationale';
import ClinicalRecommendation from './measuredetails/ClinicalRecommendation';
import ImprovementNotation from './measuredetails/ImprovementNotation';
import References from './measuredetails/References';
import Definition from './measuredetails/Definition';
import Guidance from './measuredetails/Guidance';
import Transmission from './measuredetails/Transmission';
import InitialPopulation from './measuredetails/InitialPopulation';
import SupplementalData from './measuredetails/SupplementalData';
import MeasureSet from './measuredetails/MeasureSet';
import MeasureDetailsComponent from './MeasureDetailsComponent';
import GeneralInformation from './measuredetails/GeneralInformation';

class MeasureDetails extends React.Component {
  render() {
    return (
      <div>
        <MeasureTabs />
        <div className="ds-l-row">
          <div className="ds-l-col--3">
            <MeasureDetailsNavigation />
          </div>
          <div className="ds-l-col--8">
            <Switch>
              <Route path="/app/measures/:id/details/generalinformation" component={() => <MeasureDetailsComponent title="General Information"><GeneralInformation /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/steward" component={() => <MeasureDetailsComponent title="Measure Steward/Developer"><Steward /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/description" component={() => <MeasureDetailsComponent title="Description"><Description /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/copyright" component={() => <MeasureDetailsComponent title="Copyright"><Copyright /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/measuretype" component={() => <MeasureDetailsComponent title="Measure Type"><MeasureType /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/stratification" component={() => <MeasureDetailsComponent title="Stratification"><Stratification /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/riskadjustment" component={() => <MeasureDetailsComponent title="Risk Adjustment"><RiskAdjustment /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/rateaggregation" component={() => <MeasureDetailsComponent title="Rate Aggregation"><RateAggregation /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/rationale" component={() => <MeasureDetailsComponent title="Rationale"><Rationale /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/clinicalrecommendation" component={() => <MeasureDetailsComponent title="Clinical Recommendation Statement"><ClinicalRecommendation /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/improvementnotation" component={() => <MeasureDetailsComponent title="Improvement Notation"><ImprovementNotation /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/references" component={() => <MeasureDetailsComponent title="References"><References /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/definition" component={() => <MeasureDetailsComponent title="Definition"><Definition /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/guidance" component={() => <MeasureDetailsComponent title="Guidance"><Guidance /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/transmission" component={() => <MeasureDetailsComponent title="Transmission"><Transmission /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/initialpopulation" component={() => <MeasureDetailsComponent title="Initial Population"><InitialPopulation /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/supplementaldata" component={() => <MeasureDetailsComponent title="Supplemental Data Elements"><SupplementalData /></MeasureDetailsComponent>} />
              <Route exact path="/app/measures/:id/details/measureset" component={() => <MeasureDetailsComponent title="Measure Set"><MeasureSet /></MeasureDetailsComponent>} />
            </Switch>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(MeasureDetails);
