class BaseValidator {
  constructor() {
    this.isValid = true;
    this.errors = {

    };
  }

  // eslint-disable-next-line
  validate(object) {

  }

  getErrors() {
    return this.errors;
  }

  isValid() {
    return this.isValid;
  }
}

export default BaseValidator;
