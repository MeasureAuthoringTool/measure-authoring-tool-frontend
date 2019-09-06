import React from 'react';
import { ChoiceList, TextField } from '@cmsgov/design-system-core';
import PropTypes from 'prop-types';

const selectChoices = [
  { defaultChecked: true, label: 'What is your preferred musical genre?', value: 'What is your preferred musical genre?' },
  { label: 'What was your dream job as a child?', value: 'B' },
  { label: 'What was the name of your favorite childhood friend?', value: 'C' },
  { label: 'What was the make of your first car?', value: 'D' },
  { label: 'In what city or town was your first job?', value: 'E' },
  { label: 'What was the name of your elementary/primary school?', value: 'F' },
  { label: 'What school did you attend for sixth grade?', value: 'G' },
  { label: 'What was the first sport you ever played as a child?', value: 'H' },
];

class SecurityQuestion extends React.Component {
  render() {
    return (
      <div className="ds-l-form-row">
        <ChoiceList
          id={`securityQuestion${this.props.number}Selector`}
          name={`securityQuestion${this.props.number}Selector`}
          choices={selectChoices}
          label={`Security Question ${this.props.number}`}
          requirementLabel="Required"
        />
        <TextField
          id={`securityAnswer${this.props.number}TextField`}
          name={`securityAnswer${this.props.number}TextField`}
          label={`Security Answer ${this.props.number}`}
          requirementLabel="Required"
          className="securityAnswerTextBox"
          type="password"
        />
      </div>
    );
  }
}

SecurityQuestion.propTypes = {
  number: PropTypes.number.isRequired,
};

export default SecurityQuestion;
