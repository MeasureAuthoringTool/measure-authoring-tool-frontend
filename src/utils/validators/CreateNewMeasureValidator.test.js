import CreateNewMeasureValidator from './CreateNewMeasureValidator';

describe('New Measure Validator', () => {
  it('validates the measure name is not blank', () => {
    const newMeasure = {
      name: '',
      abbreviatedName: 'test',
      measureScoring: 'Cohort',
      isPatientBased: true,
    };

    const newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.measureNameErrorMessage).toEqual('Measure Name is required.');
  });

  it('validates the measure name contains at least one letter', () => {
    const newMeasure = {
      name: 'a',
      abbreviatedName: 'test',
      measureScoring: 'Cohort',
      isPatientBased: true,
    };

    let newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(true);


    newMeasure.name = '12345';
    newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.measureNameErrorMessage).toEqual('Measure Name requires at least one letter.');

    newMeasure.name = '!@#$%';
    newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.measureNameErrorMessage).toEqual('Measure Name requires at least one letter.');
  });

  it('validates the abbreviated name is not blank', () => {
    const newMeasure = {
      name: 'abc',
      abbreviatedName: '',
      measureScoring: 'Cohort',
      isPatientBased: true,

    };

    const newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.abbreviatedNameErrorMessage).toEqual('eCQM Abbreviated Title is required.');
  });

  it('validates the abbreviated name contains at least one letter', () => {
    const newMeasure = {
      name: 'a',
      abbreviatedName: 'test',
      measureScoring: 'Cohort',
      isPatientBased: true,
    };

    let newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(true);


    newMeasure.abbreviatedName = '12345';
    newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.abbreviatedNameErrorMessage).toEqual('eCQM Abbreviated Title requires at least one letter.');

    newMeasure.abbreviatedName = '!@#$%';
    newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.abbreviatedNameErrorMessage).toEqual('eCQM Abbreviated Title requires at least one letter.');
  });

  it('validates that a measure scoring was selected', () => {
    const newMeasure = {
      name: 'a',
      abbreviatedName: 'test',
      measureScoring: '--Select--',
      isPatientBased: true,
    };

    const newMeasureValidator = new CreateNewMeasureValidator();
    newMeasureValidator.validate(newMeasure);
    expect(newMeasureValidator.isValid).toEqual(false);
    expect(newMeasureValidator.errors.measureScoringTypeErrorMessage).toEqual('Measure Scoring is required.');
  });
});
