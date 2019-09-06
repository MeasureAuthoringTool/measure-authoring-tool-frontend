import React from 'react';
import { Tab, TabPanel } from '@cmsgov/design-system-core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import PersonalInformation from './PersonalInformation';
import SecurityQuestions from './SecurityQuestionsComponent';
import Password from './Password';

class Account extends React.Component {
  render() {
    return (
      <div>
        <div className="ds-c-tabs" role="tablist">
          <Link to="/app/account/information">
            <Tab id="personalInformation" panelId="personalInformationTabPanel" selected={this.props.location.pathname === '/app/account/information' || this.props.location.pathname === '/app/account'}>Personal Information</Tab>
          </Link>
          <Link to="/app/account/securityquestions">
            <Tab id="securityQuestions" panelId="securityQuestionsTabPanel" selected={this.props.location.pathname === '/app/account/securityquestions'}>Security Questions</Tab>
          </Link>
          <Link to="/app/account/password">
            <Tab id="password" panelId="passwordTabPanel" selected={this.props.location.pathname === '/app/account/password'}>Password</Tab>
          </Link>
        </div>
        <TabPanel id="personalInformationTabPanel" tabId="personalInformation" selected={this.props.location.pathname === '/app/account/information' || this.props.location.pathname === '/app/account'}>
          <PersonalInformation />
        </TabPanel>
        <TabPanel id="securityQuestionsTabPanel" tabId="securityQuestions" selected={this.props.location.pathname === '/app/account/securityquestions'}>
          <SecurityQuestions />
        </TabPanel>
        <TabPanel id="passwordTabPanel" tabId="password" selected={this.props.location.pathname === '/app/account/password'}>
          <Password />
        </TabPanel>
      </div>
    );
  }
}

Account.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Account);
