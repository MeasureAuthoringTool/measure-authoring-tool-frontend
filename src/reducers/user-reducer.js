import { createReducer, updateObject } from './reducer-utils';

const initialUserState = {
  currentUser: {
  },
  error: {

  },
  isFetching: false,
};

function getCurrentUserStart(state, action) {
  return updateObject(state, { isFetcing: action.isFetching });
}

function getCurrentUserSuccess(state, action) {
  return updateObject(state, {
    ...state,
    currentUser: action.user,
    isFetching: action.isFetching,
  });
}

function getCurrentUserError(state, action) {
  updateObject(state, initialUserState);
  return updateObject(state, { error: action.error });
}

const userReducer = createReducer(initialUserState, {
  GET_CURRENT_USER_START: getCurrentUserStart,
  GET_CURRENT_USER_SUCCESS: getCurrentUserSuccess,
  GET_CURRENT_USER_ERROR: getCurrentUserError,
});

export default userReducer;
