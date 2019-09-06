import * as api from '../api/libraries-api';

export const SET_CURRENT_LIBRARY_ID = 'SET_CURRENT_LIBRARY_ID';
export const GET_LIBRARY_INFORMATION_START = 'GET_LIBRARY_INFORMATION_START';
export const GET_LIBRARY_INFORMATION_ERROR = 'GET_LIBRARY_INFORMATION_ERROR';
export const GET_LIBRARY_INFORMATION_SUCCESS = 'GET_LIBRARY_INFORMATION_SUCCESS';

export function setCurrentLibraryId(id) {
  return {
    type: SET_CURRENT_LIBRARY_ID,
    id,
  };
}

function getLibraryInformationStart() {
  return {
    type: GET_LIBRARY_INFORMATION_START,
    isFetching: true,
  };
}

function getLibraryInformationSuccess(libraryInfomation) {
  return {
    type: GET_LIBRARY_INFORMATION_SUCCESS,
    libraryInfomation,
    isFetching: true,
  };
}

function getLibraryInformationError(error) {
  return {
    type: GET_LIBRARY_INFORMATION_ERROR,
    error,
    isFetching: false,
  };
}

export function getLibraryInformationById(id) {
  return async (dispatch) => {
    dispatch(getLibraryInformationStart());
    try {
      const libraryInformation = await api.getLibraryById(id);
      dispatch(getLibraryInformationSuccess(libraryInformation));
    } catch (error) {
      dispatch(getLibraryInformationError(error));
    }
  };
}
