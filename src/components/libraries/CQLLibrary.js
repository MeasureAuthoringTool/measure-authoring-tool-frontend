import React from 'react';
import { Tabs, TabPanel } from '@cmsgov/design-system-core';
import CQLWorkspace from './library/CQLWorkspace';
import CQLDashboard from './library/CQLDashboard';

class CQLLibrary extends React.Component {
  render() {
    return (
      <Tabs>
        <TabPanel id="cqlDashboard" tab="CQL Dashboard" selected>
          <CQLDashboard />
        </TabPanel>
        <TabPanel id="cqlWorkspace" tab="CQL Workspace" selected>
          <CQLWorkspace />
        </TabPanel>
      </Tabs>
    );
  }
}

export default CQLLibrary;
