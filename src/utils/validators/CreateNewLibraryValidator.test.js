import CreateNewLibraryValidator from './CreateNewLibraryValidator';

const errorMessage = 'Invalid Library Name. Must start with an alpha-character or underscore followed by an alpha-numeric character(s) or underscore(s), and must not contain spaces.';

describe('New CQL Library Validator', () => {
  it('validates a library with a letter or underscore that is not first letter', () => {
    const newLibrary = {
      name: 'test1',
    };

    let newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(true);

    newLibrary.name = 'test_test';
    newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(true);
  });

  it('identifies an error if there is a space in name', () => {
    const newLibrary = {
      name: 'test 1',
    };

    let newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);

    newLibrary.name = 'test\ttest';
    newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);

    newLibrary.name = 'test\ntest';
    newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);
  });

  it('identifies that the first character is not a letter', () => {
    const newLibrary = {
      name: '1test',
    };

    let newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);

    newLibraryValidtor = new CreateNewLibraryValidator();
    newLibrary.name = '_test';
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);
  });

  it('identifiers that there are special characters in the name', () => {
    const newLibrary = {
      name: 'te)st',
    };

    let newLibraryValidtor = new CreateNewLibraryValidator();
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);

    newLibraryValidtor = new CreateNewLibraryValidator();
    newLibrary.name = 'te*st';
    newLibraryValidtor.validate(newLibrary);
    expect(newLibraryValidtor.isValid).toEqual(false);
    expect(newLibraryValidtor.errors.libraryNameErrorMessage).toEqual(errorMessage);
  });
});
