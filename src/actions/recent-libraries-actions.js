import * as api from '../api/libraries-api';

export const GET_RECENT_LIBRARIES_START = 'GET_RECENT_LIBRARIES_START';
export const GET_RECENT_LIBRARIES_ERROR = 'GET_RECENT_LIBRARIES_ERROR';
export const UPDATE_RECENT_LIBRARIES = 'UPDATE_RECENT_LIBRARIES';

function getRecentLibrariesStart() {
  return {
    type: GET_RECENT_LIBRARIES_START,
    isFetching: true,
  };
}

function getRecentLibrariesSuccess(recentLibraries) {
  return {
    type: UPDATE_RECENT_LIBRARIES,
    recentLibraries,
    isFetching: false,
  };
}

function getRecentLibrariesError(error) {
  return {
    type: GET_RECENT_LIBRARIES_ERROR,
    error,
    isFetching: false,
  };
}

export function getRecentLibraries() {
  return async (dispatch) => {
    dispatch(getRecentLibrariesStart());
    try {
      const recentLibraries = await api.getRecentLibraries();
      dispatch(getRecentLibrariesSuccess(recentLibraries));
    } catch (error) {
      dispatch(getRecentLibrariesError(error));
    }
  };
}
