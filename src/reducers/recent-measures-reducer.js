import { createReducer, updateObject } from './reducer-utils';

const initialRecentMeasuresState = {
  measures: [],
  isFetching: false,
  error: {},
};

function getRecentMeasuresStart(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
  });
}

function updateRecentMeasures(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    measures: action.recentMeasures,
  });
}
function getRecentMeasuresError(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    error: action.error,
  });
}

const recentMeasuresReducer = createReducer(initialRecentMeasuresState, {
  GET_RECENT_MEASURES_START: getRecentMeasuresStart,
  GET_RECENT_MEASURES_ERROR: getRecentMeasuresError,
  UPDATE_RECENT_MEASURES: updateRecentMeasures,
});

export default recentMeasuresReducer;
