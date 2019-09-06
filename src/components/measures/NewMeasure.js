import React from 'react';
import PropTypes from 'prop-types';
import { Button, ChoiceList, TextField } from '@cmsgov/design-system-core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ScoringType from '../../constants/scoring-types';
import { createNewMeasure } from '../../actions/new-measure-actions';
import { setCurrentMeasureId } from '../../actions/measure-actions';
import CreateNewMeasureValidator from '../../utils/validators/CreateNewMeasureValidator';

const measureScoringTypeChoices = [
  { label: '--Select--', value: '--Select--' },
  ScoringType.COHORT,
  ScoringType.CONTINUOUS_VARIABLE,
  ScoringType.PROPORTION,
  ScoringType.RATIO,
];

const yes = {
  label: 'Yes', value: 'yes', defaultChecked: true,
};

const no = { label: 'No', value: 'no' };

const patientBasedMeasureChoices = [
  no,
  yes,
];

class NewMeasure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      measure: {
        name: '',
        eCQMAbbreviatedTitle: '',
        measureScoring: '--Select--',
        isPatientBased: true,
      },

      error: {
        measureNameErrorMessage: null,
        eCQMAbbreviatedTitleErrorMesssage: null,
        measureScoringTypeErrorMessage: null,
      },

      patientBasedMeasureChoices,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.oneCQMAbbreviatedTitleChange = this.oneCQMAbbreviatedTitleChange.bind(this);
    this.onMeasureScoringChange = this.onMeasureScoringChange.bind(this);
    this.onPatientBasedMeasureChange = this.onPatientBasedMeasureChange.bind(this);
    this.onSaveAndContinueButtonClick = this.onSaveAndContinueButtonClick.bind(this);
    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
  }

  onNameChange(event) {
    const value = event.target.value;
    this.setState(prevState => ({ measure: { ...prevState.measure, name: value } }));
  }

  oneCQMAbbreviatedTitleChange(event) {
    const value = event.target.value;
    this.setState(prevState => (
      { measure: { ...prevState.measure, eCQMAbbreviatedTitle: value } }
    ));
  }

  onMeasureScoringChange(event) {
    const value = event.target.value;
    const choices = [];
    choices.push(no);
    if (value === ScoringType.COHORT.value || value === ScoringType.PROPORTION.value || value === ScoringType.RATIO.value || value === '--Select--') {
      choices.push(yes);
    }

    this.setState({ patientBasedMeasureChoices: choices });
    this.setState(prevState => ({ measure: { ...prevState.measure, measureScoring: value } }));
  }

  onPatientBasedMeasureChange(event) {
    const value = event.target.value;
    this.setState(prevState => ({ measure: { ...prevState.measure, isPatientBased: value === 'yes' } }));
  }

  async onSaveAndContinueButtonClick() {
    const newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(this.state.measure);
    if (newMeasureValidator.isValid) {
      const newMeasure = await this.props.createNewMeasure(this.state.measure);
      await this.props.setCurrentMeasureId(newMeasure.id);
      this.props.history.push(`/app/measures/${newMeasure.id}`);
    } else {
      this.setState({
        error: {
          measureNameErrorMessage: newMeasureValidator.errors.measureNameErrorMessage,
          eCQMAbbreviatedTitleErrorMessage:
            newMeasureValidator.errors.eCQMAbbreviatedTitleErrorMessage,
          measureScoringTypeErrorMessage: newMeasureValidator.errors.measureScoringTypeErrorMessage,
        },
      });
    }
  }

  onCancelButtonClick() {
    this.props.history.push('/app');
  }

  render() {
    return (
      <section className="ds-l-container">
        <form>
          <h1 className="ds-h1">Create New Measure</h1>
          <div className="ds-l-row-form">
            <TextField
              label="Name"
              placeholder="Name"
              name="measureNameTextField"
              requirementLabel="Required"
              multiline
              onChange={this.onNameChange}
              errorMessage={this.state.error.measureNameErrorMessage}
            />
          </div>
          <div className="ds-l-row-form">
            <TextField
              label="eCQM Abbreviated Title"
              placeholder="eCQM Abbreviated Title"
              name="eCQMAbbreviatedTitleTextField"
              requirementLabel="Required"
              onChange={this.oneCQMAbbreviatedTitleChange}
              errorMessage={this.state.error.eCQMAbbreviatedTitleErrorMessage}
            />
          </div>
          <div className="ds-l-row-form">
            <ChoiceList
              label="Measure Scoring"
              name="measureScoringSelector"
              requirementLabel="Required"
              value="--Select--"
              choices={measureScoringTypeChoices}
              type="select"
              onChange={this.onMeasureScoringChange}
              errorMessage={this.state.error.measureScoringTypeErrorMessage}
            />
          </div>
          <div className="ds-l-row-form">
            <ChoiceList
              label="Patient-based Measure"
              name="patientBasedMeasureSelector"
              value="Yes"
              requirementLabel="Required"
              choices={this.state.patientBasedMeasureChoices}
              type="select"
              onChange={this.onPatientBasedMeasureChange}
            />
          </div>
          <div className="ds-l-row-form">
            <Button variation="success" className="ds-u-margin-right--1" onClick={this.onSaveAndContinueButtonClick}>Save and Continue</Button>
            <Button variation="danger" onClick={this.onCancelButtonClick}>Cancel</Button>
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createNewMeasure, setCurrentMeasureId }, dispatch);
};

NewMeasure.propTypes = {
  history: PropTypes.object.isRequired,
  createNewMeasure: PropTypes.func.isRequired,
  setCurrentMeasureId: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(NewMeasure));
