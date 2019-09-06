import React from 'react';
import {
  TextField,
  Choice,
  ChoiceList,
  Button,
  DateField,
} from '@cmsgov/design-system-core';
import * as ScoringTypes from '../../../../constants/scoring-types';

const measureScoringChoices = [
  { label: '--Select--', value: '--Select--' },
  ScoringTypes.COHORT,
  ScoringTypes.CONTINUOUS_VARIABLE,
  ScoringTypes.PROPORTION,
  ScoringTypes.RATIO,
];

const patientBasedChoices = [
  { label: 'No', value: 'no' },
  {
    label: 'Yes',
    value: 'yes',
    defaultChecked: true,
  },
];

const endorsedByNQFChoices = [
  { label: 'No', value: 'no', defaultChecked: true },
  { label: 'Yes', value: 'yes' },
];

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEndorsedByNQF: false,
      isCalendarYear: true,
      availablePatientBasedChoices: patientBasedChoices,
    };

    this.onCalendarYearChange = this.onCalendarYearChange.bind(this);
    this.onEndorsedByNQFChange = this.onEndorsedByNQFChange.bind(this);
    this.onMeasureScoringChange = this.onMeasureScoringChange.bind(this);
  }

  onMeasureScoringChange(event) {
    const value = event.target.value;
    const choices = [];

    const yes = {
      defaultChecked: true,
      checked: true,
      label: 'Yes',
      value: 'yes',
    };

    const no = { label: 'No', value: 'no' };

    choices.push(no);
    if (value === ScoringTypes.COHORT.value
      || value === ScoringTypes.PROPORTION.value
      || value === ScoringTypes.RATIO.value || value === '--Select--') {
      choices.push(yes);
    }

    this.setState({ availablePatientBasedChoices: choices });
  }

  onCalendarYearChange(event) {
    this.setState({ isCalendarYear: event.target.checked });
  }

  onEndorsedByNQFChange(event) {
    const value = event.target.value;
    if (value === 'yes') {
      this.setState({ isEndorsedByNQF: true });
    } else {
      this.setState({ isEndorsedByNQF: false });
    }
  }

  render() {
    return (
      <div>
        <div className="ds-l-form-row">
          <div className="ds-l-col--6">
            <TextField label="Measure Name" name="measureNameTextField" />
          </div>
          <div className="ds-l-col--6">
            <TextField label="eCQM Abbreviated Title" name="eCQMAbbreviatedTitleTextField" />
          </div>
        </div>
        <div className="ds-l-form-row">
          <div className="ds-l-col--6">
            <ChoiceList choices={measureScoringChoices} label="Measure Scoring" name="measureScoringSelector" type="select" onChange={this.onMeasureScoringChange} />
          </div>
          <div className="ds-l-col--6">
            <ChoiceList choices={this.state.availablePatientBasedChoices} label="Patient-based Measure" name="patientBasedSelector" type="select" />
          </div>
        </div>
        <div className="ds-l-form-row">
          <div className="ds-l-col--6">
            <TextField label="Finalized Date" name="finalizedDateTextField" disabled />
          </div>
          <div className="ds-l-col--6">
            <TextField label="GUID" name="guidTextField" disabled />
          </div>
        </div>
        <div className="ds-l-form-row">
          <div className="ds-l-col--3">
            <TextField label="eCQM Identifier" name="eCQMIdentifierTextField" disabled />
          </div>
          <div className="ds-l-col--3">
            <Button variation="primary" className="ds-u-margin-top--6" size="medium">Generate Identifier</Button>
          </div>
        </div>
        <div className="ds-l-form-row">
          <div className="ds-l-col--3">
            <ChoiceList choices={endorsedByNQFChoices} label="Endorsed by NQF" name="endorsedByNQFSelector" type="select" onChange={this.onEndorsedByNQFChange} />
          </div>
          <div className="ds-l-col--3">
            <TextField label="NQF Number" name="NQF Number" disabled={!this.state.isEndorsedByNQF} />
          </div>
        </div>
        <div className="ds-l-form-row">
          <div className="ds-l-col--4 ds-u-margin-top--6">
            <Choice defaultChecked size="small" hint="January 1, 20xx through December 31, 20xx" onChange={this.onCalendarYearChange}>Calendar Year</Choice>
          </div>
          <div className="ds-l-col--4">
            <DateField label="From" hint="" disabled={this.state.isCalendarYear} />
          </div>
          <div className="ds-l-col--4">
            <DateField label="To" hint="" disabled={this.state.isCalendarYear} />
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInformation;
