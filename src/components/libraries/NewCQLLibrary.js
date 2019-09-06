import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@cmsgov/design-system-core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createNewLibrary } from '../../actions/new-library-actions';
import CreateNewLibraryValidator from '../../utils/validators/CreateNewLibraryValidator';

class NewCQLLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      library: {
        name: '',
      },
      error: {
        libraryNameErrorMessage: null,
      },
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onSaveAndContinueButtonClick = this.onSaveAndContinueButtonClick.bind(this);
    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
  }

  onNameChange(event) {
    const value = event.target.value;
    this.setState(prevState => ({ library: { ...prevState.library, name: value } }));
    this.setState(prevState => ({ error: { ...prevState.error, isValid: true } }));
  }

  async onSaveAndContinueButtonClick() {
    const newLibraryValidator = new CreateNewLibraryValidator();
    newLibraryValidator.validate(this.state.library);

    if (newLibraryValidator.isValid) {
      const newLibrary = await this.props.createNewLibrary(this.state.library);
      this.props.history.push(`/app/libraries/${newLibrary.id}`);
    } else {
      this.setState({
        error: {
          libraryNameErrorMessage: newLibraryValidator.errors.libraryNameErrorMessage,
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
          <h1 className="ds-h1">Create New CQL Library</h1>
          <div className="ds-l-row-form">
            <TextField
              label="Name"
              name="cqlLibraryNameTextField"
              requirementLabel="Required"
              multiline
              onChange={this.onNameChange}
              errorMessage={this.state.error.libraryNameErrorMessage}
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
  return bindActionCreators({ createNewLibrary }, dispatch);
};

NewCQLLibrary.propTypes = {
  history: PropTypes.object.isRequired,
  createNewLibrary: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(NewCQLLibrary));
