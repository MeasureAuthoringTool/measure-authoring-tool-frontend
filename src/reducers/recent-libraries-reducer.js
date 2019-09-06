import { createReducer, updateObject } from './reducer-utils';

const initialRecentLibrariesState = {
  libraries: [],
  isFetching: false,
  error: {},
};

function getRecentLibrariesStart(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
  });
}

function updateRecentLibraries(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    libraries: action.recentLibraries,
  });
}
function getRecentLibrariesError(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    error: action.error,
  });
}

const recentLibrariesReducer = createReducer(initialRecentLibrariesState, {
  GET_RECENT_LIBRARIES_START: getRecentLibrariesStart,
  GET_RECENT_LIBRARIES_ERROR: getRecentLibrariesError,
  UPDATE_RECENT_LIBRARIES: updateRecentLibraries,
});

export default recentLibrariesReducer;
