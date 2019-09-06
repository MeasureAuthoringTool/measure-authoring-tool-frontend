import { createReducer, updateObject } from './reducer-utils';

const initialLibraryState = {
  id: '',
  name: '',
  version: '',
  isDraft: false,
  ownerName: '',
  isFetching: false,
  error: {},
};

function setCurrentLibraryId(state, action) {
  return updateObject(state, {
    ...state,
    id: action.id,
  });
}

function getLibraryInformationStart(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
  });
}

function getLibraryInfomrationError(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    error: action.error,
  });
}

function getLibraryInformationSuccess(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    name: action.libraryInfomation.name,
    version: action.libraryInfomation.version,
    isDraft: action.libraryInfomation.isDraft,
    ownerName: action.libraryInfomation.ownerName,
  });
}

const libraryReducer = createReducer(initialLibraryState, {
  SET_CURRENT_LIBRARY_ID: setCurrentLibraryId,
  GET_LIBRARY_INFORMATION_START: getLibraryInformationStart,
  GET_LIBRARY_INFORMATION_ERROR: getLibraryInfomrationError,
  GET_LIBRARY_INFORMATION_SUCCESS: getLibraryInformationSuccess,
});


export default libraryReducer;
