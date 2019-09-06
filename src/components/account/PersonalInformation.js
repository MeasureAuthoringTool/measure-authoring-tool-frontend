import React from 'react';
import { Button, TextField } from '@cmsgov/design-system-core';

class PersonalInformation extends React.Component {
  render() {
    return (
      <section className="ds-l-container">
        <h1 className="ds-h1">Update Personal Information</h1>
        <form>
          <div className="ds-l-form-row">
            <TextField id="firstNameTextField" name="firstNameTextField" label="First Name" size="medium" />
            <TextField id="middleInitialTextField" name="middleInitialTextField" label="M.I." size="small" />
            <TextField id="lastNameTextField" name="lastNameTextField" label="Last Name" size="medium" />
          </div>

          <div className="ds-l-form-row">
            <TextField id="titleTextField" name="titleTextField" label="Title" className="text-box" />
          </div>

          <div className="ds-l-form-row">
            <TextField id="organizationTextField" name="organizationTextField" label="Organization" disabled className="text-box" />
          </div>
          <div className="ds-l-form-row">
            <TextField id="organizationOIDTextField" name="organizationOIDTextField" label="Organization OID" disabled className="text-box" />
          </div>
          <div className="ds-l-form-row">
            <TextField id="emailTextField" name="emailTextField" label="Email" type="email" className="text-box" />
          </div>
          <div className="ds-l-form-row">
            <TextField id="phoneNumberTextField" name="phoneNumberTextField" label="Phone Number" size="medium" mask="phone" className="text-box" />
          </div>
          <div className="ds-l-form-row">
            <TextField id="currentPasswordPersonalInformationTextBox" name="currentPasswordPersonalInformationTextBox" label="Current Password" type="password" requirementLabel="Required" hint="Enter current password to confirm changes." className="text-box" />
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

export default PersonalInformation;
