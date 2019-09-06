import * as api from '../api/measures-api';

export const SET_MEASURE_SEARCH_CRITERIA = 'SET_MEASURE_SEARCH_CRITERIA';
export const GET_MEASURE_SEARCH_START = 'GET_MEASURE_SEARCH_START';
export const GET_MEASURE_SEARCH_ERROR = 'GET_MEASURE_SEARCH_ERROR';
export const GET_MEASURE_SEARCH_SUCCESS = 'GET_MEASURE_SEARCH_SUCCESS';

export function setMeasureSearchMyMeasures(myMeasures) {
  return {
    type: SET_MEASURE_SEARCH_CRITERIA,
    myMeasures,
  };
}

function getMeasureSearchStart() {
  return {
    type: GET_MEASURE_SEARCH_START,
    isFetching: true,
  };
}

function getMeasureSearchSuccess(measureSearchResults) {
  return {
    type: GET_MEASURE_SEARCH_SUCCESS,
    measureSearchResults,
    isFetching: true,
  };
}

function getMeasureSearchError(error) {
  return {
    type: GET_MEASURE_SEARCH_ERROR,
    error,
    isFetching: false,
  };
}

export function searchMeasures(searchText, myMeasures, currentUserName) {
  return async (dispatch) => {
    dispatch(getMeasureSearchStart());
    try {
      const measureSearchResults = await
      api.getMeasureSearch(searchText, myMeasures, currentUserName);
      dispatch(getMeasureSearchSuccess(measureSearchResults));
    } catch (error) {
      dispatch(getMeasureSearchError(error));
    }
  };
}
