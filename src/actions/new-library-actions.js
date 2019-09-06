import * as api from '../api/libraries-api';

export const CREATE_NEW_LIBRARY = 'CREATE_NEW_LIBRARY';
export const CREATE_NEW_LIBRARY_START = 'CREATE_NEW_LIBRARY_START';
export const CREATE_NEW_LIBRARY_ERROR = 'CREATE_NEW_LIBRARY_ERROR';
export const CREATE_NEW_LIBRARY_SUCCESS = 'CREATE_NEW_LIBRARY_SUCCESS';

function createNewLibraryStart() {
  return {
    type: CREATE_NEW_LIBRARY_START,
    isFetching: true,
  };
}

function createNewLibrarySuccess(newLibraryInformation) {
  return {
    type: CREATE_NEW_LIBRARY_SUCCESS,
    payload: newLibraryInformation,
    isFetching: false,
  };
}

function createNewLibraryError(error) {
  return {
    type: CREATE_NEW_LIBRARY_ERROR,
    error,
    isFetching: false,
  };
}

export function createNewLibrary(newLibraryInformation) {
  return async (dispatch) => {
    dispatch(createNewLibraryStart());
    try {
      const createdLibrary = await api.createNewLibrary(newLibraryInformation);
      dispatch(createNewLibrarySuccess(createdLibrary));
      return createdLibrary;
    } catch (error) {
      dispatch(createNewLibraryError(error));
      return null;
    }
  };
}
