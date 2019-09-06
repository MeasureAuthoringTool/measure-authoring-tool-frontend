import { createReducer, updateObject } from './reducer-utils';

const initialMeasureSearchState = {
  searchText: '',
  myMeasures: true,
  measureSearchResults: [],
  isFetching: false,
  error: {},
};

function setMeasureSearchCriteria(state, action) {
  return updateObject(state, {
    ...state,
    searchText: action.searchText,
    myMeasures: action.myMeasures,
  });
}

function getMeasureSearchStart(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
  });
}

function getMeasureSearchError(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    error: action.error,
  });
}

function getMeasureSearchSuccess(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    measureSearchResults: action.measureSearchResults,
  });
}

const measureSearchReducer = createReducer(initialMeasureSearchState, {
  SET_MEASURE_SEARCH_CRITERIA: setMeasureSearchCriteria,
  GET_MEASURE_SEARCH_START: getMeasureSearchStart,
  GET_MEASURE_SEARCH_ERROR: getMeasureSearchError,
  GET_MEASURE_SEARCH_SUCCESS: getMeasureSearchSuccess,
});


export default measureSearchReducer;
