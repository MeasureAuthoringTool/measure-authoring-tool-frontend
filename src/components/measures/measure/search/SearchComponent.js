import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextField, Button as CMSButton, ChoiceList,
} from '@cmsgov/design-system-core';
import {
  Button, FormGroup, Collapse,
} from 'reactstrap';
import { searchMeasures } from '../../../../actions/measure-search-actions';

const searchTextInputStyle = {
  width: '100%',
  maxWidth: '100%',
};

const searchButtonStyle = {
  float: 'right',
  marginRight: '1%',
  marginBottom: '1%',
};

const filterByCheckBoxStyle = {
  marginLeft: '1%',
  paddingTop: '1%',
  marginTop: '35px',
};

const advancedSearchLinkStyle = {
  float: 'left',
  marginRight: '1%',
  marginBottom: '1%',
};

const searchFormGroupStyle = {
  marginLeft: '1%',
  paddingTop: '1%',
};

const checkboxPaddingStyle = {
  marginTop: '10px',
};

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleMyMeasures = this.toggleMyMeasures.bind(this);
    this.search = this.search.bind(this);
    this.setMeasureText = this.setMeasureText.bind(this);
    this.state = {
      collapse: false,
      myMeasures: true,
      measureText: '',
    };
  }

  setMeasureText(searchField) {
    this.setState({ measureText: searchField.target.value });
  }

  search() {
    this.props.searchMeasures(this.state.measureText, this.state.myMeasures, `${this.props.user.firstName} ${this.props.user.lastName}`);
  }

  toggle() {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  }

  toggleMyMeasures() {
    this.setState(prevState => ({ myMeasures: !prevState.myMeasures }));
  }

  render() {
    return (
      <div id="searchDiv" className="searchDiv">
        <div className="ds-l-row">
          <div className="ds-l-col--12 ds-l-xl-col--10">
            <FormGroup style={searchFormGroupStyle}>
              <TextField
                style={searchTextInputStyle}
                className="searchTextInput"
                type="text"
                name="searchText"
                id="searchText"
                value={this.state.measureText}
                onChange={this.setMeasureText}
                label="Search Text"
              />
            </FormGroup>
          </div>
          <div className="ds-l-col--12 ds-l-xl-col--2">
            <FormGroup style={filterByCheckBoxStyle}>
              <ChoiceList
                style={checkboxPaddingStyle}
                choices={[
                  {
                    defaultChecked: true,
                    label: 'Filter by My Measures',
                    key: 'myMeasures',
                    value: 'myMeasures',
                  },
                ]}
                label=""
                id="searchByMyMeasuresCheckBox"
                name="searchByMyMeasuresCheckBox"
                type="checkbox"
                onChange={() => this.toggleMyMeasures()}
              />
            </FormGroup>
          </div>
          <div className="ds-l-col--12">
            <Button color="link" style={advancedSearchLinkStyle} onClick={() => this.toggle()}>Advanced Search</Button>
            <Collapse isOpen={this.state.collapse}>
              <div className="divHeight" />
            </Collapse>
            <CMSButton style={searchButtonStyle} variation="primary" onClick={() => this.search()}>Search</CMSButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.currentUser,
    currentMeasure: state.currentMeasure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchMeasures }, dispatch);
};

SearchComponent.propTypes = {
  searchMeasures: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
