import React from 'react';
import { Button, TextField } from '@cmsgov/design-system-core';

class Password extends React.Component {
  render() {
    return (
      <section className="ds-l-container">
        <h1 className="ds-h1">Change Password</h1>
        <form>
          <div className="ds-l-form-row">
            <TextField label="New Password" name="newPasswordTextBox" id="newPasswordTextBox" type="password" requirementLabel="Required" />
          </div>
          <div className="ds-l-form-row">
            <TextField label="Confirm New Password" name="confirmNewPasswordChangePasswordTextBox" id="confirmNewPasswordChangePasswordTextBox" type="password" requirementLabel="Required" />
          </div>
          <div className="ds-l-form-row">
            <TextField label="Current Password" name="currentPasswordChangePasswordTextBox" id="currentPasswordChangePasswordTextBox" type="password" requirementLabel="Required" hint="Enter current password to confirm changes." />
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

export default Password;
