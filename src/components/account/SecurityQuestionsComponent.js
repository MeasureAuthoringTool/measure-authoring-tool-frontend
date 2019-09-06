import React from 'react';
import { Button, TextField } from '@cmsgov/design-system-core';
import SecurityQuestion from './SecurityQuestion';

class SecurityQuestions extends React.Component {
  render() {
    return (
      <section className="ds-l-container">
        <h1 className="ds-h1">Update Security Questions</h1>
        <form>
          <SecurityQuestion number={1} />
          <SecurityQuestion number={2} />
          <SecurityQuestion number={3} />
          <div className="ds-l-form-row">
            <TextField id="currentPasswordSecurityQuestionsTextField" name="currentPasswordSecurityQuestionsTextField" type="password" requirementLabel="Required" hint="Enter current password to confirm changes." label="Current Password" />
          </div>
          <div className="ds-l-form-row">
            <Button variation="primary" type="submit">
              <span>Save</span>
            </Button>
            <Button variation="danger" type="button">
              <span>Undo</span>
            </Button>
          </div>
        </form>
      </section>
    );
  }
}

export default SecurityQuestions;
