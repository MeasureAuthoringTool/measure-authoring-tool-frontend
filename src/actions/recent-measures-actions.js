import * as api from '../api/measures-api';

export const GET_RECENT_MEASURES_START = 'GET_RECENT_MEASURES_START';
export const GET_RECENT_MEASURES_ERROR = 'GET_RECENT_MEASURES_ERROR';
export const UPDATE_RECENT_MEASURES = 'UPDATE_RECENT_MEASURES';

function getRecentMeasuresStart() {
  return {
    type: GET_RECENT_MEASURES_START,
    isFetching: true,
  };
}

function getRecentMeasuresSuccess(recentMeasures) {
  return {
    type: UPDATE_RECENT_MEASURES,
    recentMeasures,
    isFetching: false,
  };
}

function getRecentMeasuresError(error) {
  return {
    type: GET_RECENT_MEASURES_ERROR,
    error,
    isFetching: false,
  };
}

export function getRecentMeasures() {
  return async (dispatch) => {
    dispatch(getRecentMeasuresStart());
    try {
      const recentMeasures = await api.getRecentMeasures();
      dispatch(getRecentMeasuresSuccess(recentMeasures));
    } catch (error) {
      dispatch(getRecentMeasuresError(error));
    }
  };
}
