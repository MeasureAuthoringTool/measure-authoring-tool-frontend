import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import store from './store/index';
import Callback from './components/auth/Callback';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Account from './components/account/Account';
import NavigationBar from './components/navbar/NavigationBar';
import Measures from './components/measures/Measures';
import Measure from './components/measures/Measure';
import NewMeasure from './components/measures/NewMeasure';
import NewCQLLibrary from './components/libraries/NewCQLLibrary';
import CQLLibraries from './components/libraries/CQLLibraries';
import CQLLibrary from './components/libraries/CQLLibrary';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/util/PrivateRoute';
import * as envUtil from './utils/env-util';
import './scss/App.scss';

library.add(fas, far);


class App extends Component {
  render() {
    return (
      <div className="App background">
        <Provider store={store}>
          <Router>
            <div>
              <NavigationBar />
              <Route exact path="/" component={Home} />
              <Route extact path="/login" component={Login} />
              <Route exact path="/oauth2/callback" component={Callback} />

              {envUtil.isUseDashboard() ? (
                <PrivateRoute exact path="/app" component={Dashboard} />
              ) : (
                <PrivateRoute exact path="/app" component={Measures} />
              )}

              <PrivateRoute path="/app/account" component={Account} />
              <PrivateRoute exact path="/app/measures" component={Measures} />
              <PrivateRoute path="/app/measures/:id" component={Measure} />
              <PrivateRoute exact path="/app/libraries" component={CQLLibraries} />
              <PrivateRoute exact path="/app/libraries/:id" component={CQLLibrary} />
              <PrivateRoute exact path="/app/new/measure" component={NewMeasure} />
              <PrivateRoute exact path="/app/new/library" component={NewCQLLibrary} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
