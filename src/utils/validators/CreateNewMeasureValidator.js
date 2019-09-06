import BaseValidator from './BaseValidator';

class CreateNewMeasureValidator extends BaseValidator {
  validate(measure) {
    if (measure.name.length === 0) {
      this.errors.measureNameErrorMessage = 'Measure Name is required.';
      this.isValid = false;
    } else if (!/^(.*)([a-zA-Z]){1,}(.*)/.test(measure.name)) {
      this.errors.measureNameErrorMessage = 'Measure Name requires at least one letter.';
      this.isValid = false;
    }

    if (measure.eCQMAbbreviatedTitle.length === 0) {
      this.errors.eCQMAbbreviatedTitleErrorMessage = 'eCQM Abbreviated Title is required.';
      this.isValid = false;
    } else if (!/^(.*)([a-zA-Z]){1,}(.*)/.test(measure.eCQMAbbreviatedTitle)) {
      this.errors.eCQMAbbreviatedTitleErrorMessage = 'eCQM Abbreviated Title requires at least one letter.';
      this.isValid = false;
    }

    if (measure.measureScoring === '--Select--') {
      this.errors.measureScoringTypeErrorMessage = 'Measure Scoring is required.';
      this.isValid = false;
    }
  }
}

export default CreateNewMeasureValidator;
