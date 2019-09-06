import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav, NavbarBrand, Navbar, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem, InputGroup, Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/user-actions';
import { setCurrentMeasureId } from '../../actions/measure-actions';
import { setCurrentLibraryId } from '../../actions/library-actions';
import * as envUtil from '../../utils/env-util';

const navLink = {
  color: '#fff',
};

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.navigateToAccount = this.navigateToAccount.bind(this);
    this.navigateToMeasure = this.navigateToMeasure.bind(this);
    this.navigateToLibrary = this.navigateToLibrary.bind(this);
    this.navigateToNewMeasure = this.navigateToNewMeasure.bind(this);
    this.navigateToNewLibrary = this.navigateToNewLibrary.bind(this);

    this.state = {
      useDashboard: envUtil.isUseDashboard(),
    };
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  navigateToAccount() {
    this.navigateTo('/app/account');
  }

  navigateToMeasure(id) {
    this.props.setCurrentMeasureId(id);
    this.navigateTo(`/app/measures/${id}`);
  }

  navigateToLibrary(id) {
    this.props.setCurrentLibraryId(id);
    this.navigateTo(`/app/libraries/${id}`);
  }

  navigateToNewMeasure() {
    this.navigateTo('/app/new/measure');
  }

  navigateToNewLibrary() {
    this.navigateTo('/app/new/library');
  }

  navigateTo(uri) {
    this.props.history.push(uri);
  }

  render() {
    return (
      <Navbar style={{ backgroundColor: '#112E51' }} dark expand="md">
        <Link to="/">
          <NavbarBrand href="/">
            Measure Authoring Tool
            <small> v5.7</small>
          </NavbarBrand>
        </Link>


        {this.state.useDashboard
          ? (
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
              Measures
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.recentMeasures.measures.map((measure) => {
                    return (
                      <DropdownItem
                        key={measure.id}
                        onClick={() => this.navigateToMeasure(measure.id)}
                      >
                        {measure.name}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Libraries
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.recentLibraries.libraries.map((library) => {
                    return (
                      <DropdownItem
                        key={library.id}
                        onClick={() => this.navigateToLibrary(library.id)}
                      >
                        {library.name}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          ) : (
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/app/measures" style={navLink}>Measure Library</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/app/libraries" style={navLink}>CQL Library</Link></NavLink>
              </NavItem>
            </Nav>
          )
          }
        <Nav navbar className="ml-auto">
          <InputGroup className="navbarSearch">
            <Input placeholder="Search for Measures or CQL Libraries" />
          </InputGroup>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <FontAwesomeIcon icon="plus" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={this.navigateToNewMeasure}>
                Create New Measure
              </DropdownItem>
              <DropdownItem onClick={this.navigateToNewLibrary}>
                Create New Library
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <FontAwesomeIcon icon="user-circle" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={this.navigateToAccount}>
                Signed In As,
                <br />
                <b>{`${this.props.user.firstName} ${this.props.user.lastName}`}</b>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.navigateToAccount}>
                <FontAwesomeIcon icon="user-alt" />
                <span> Account</span>
              </DropdownItem>
              <DropdownItem>
                <FontAwesomeIcon icon="sign-out-alt" />
                <span> Sign Out</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.currentUser,
    recentMeasures: state.recentMeasures,
    recentLibraries: state.recentLibraries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCurrentUser, setCurrentMeasureId, setCurrentLibraryId }, dispatch);
};

NavigationBar.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  recentMeasures: PropTypes.object.isRequired,
  recentLibraries: PropTypes.object.isRequired,
  setCurrentMeasureId: PropTypes.func.isRequired,
  setCurrentLibraryId: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
