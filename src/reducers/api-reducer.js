import { createReducer, updateObject } from './reducer-utils';

const initialApiState = {
  info: {
    name: '',
    version: '',
  },
  isFetching: false,
  error: {

  },
};

function getAPIInformation(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
  });
}


function getAPIInformationSuccess(state, action) {
  return updateObject(state, {
    info: action.apiInformation,
    isFetching: action.isFetching,
  });
}

function getAPIInformationError(state, action) {
  return updateObject(state, {
    ...state,
    error: action.error,
    isFetching: action.isFetching,
  });
}

const apiReducer = createReducer(initialApiState, {
  GET_API_INFORMATION: getAPIInformation,
  GET_API_INFORMATION_SUCCESS: getAPIInformationSuccess,
  GET_API_INFORMATION_ERROR: getAPIInformationError,
});

export default apiReducer;
