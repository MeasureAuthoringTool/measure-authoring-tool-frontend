import BaseValidator from './BaseValidator';
import * as characterUtil from '../character-util';

function isUnderscore(character) {
  return character === '_';
}

function containsInvalidCharacter(name) {
  for (let i = 0; i < name.length; i += 1) {
    const current = name.charAt(i);
    const isValid = !characterUtil.isWhiteSpace(current)
        && (characterUtil.isNumber(current)
        || characterUtil.isCharacter(current) || isUnderscore(current));

    if (!isValid) {
      return true;
    }
  }

  return false;
}


class CreateNewLibraryValidator extends BaseValidator {
  validate(library) {
    if (library.name.length === 0) {
      this.errors.libraryNameErrorMessage = 'Library Name is required.';
      this.isValid = false;
    } else if (
      !characterUtil.isCharacter(library.name.charAt(0)) // first character must be letter
       || containsInvalidCharacter(library.name) // cannot contain invalid characters
    ) {
      this.errors.libraryNameErrorMessage = 'Invalid Library Name. Must start with an alpha-character or underscore followed by an alpha-numeric character(s) or underscore(s), and must not contain spaces.';
      this.isValid = false;
    }
  }
}


export default CreateNewLibraryValidator;
