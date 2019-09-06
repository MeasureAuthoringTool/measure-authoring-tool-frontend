import * as api from '../api/user-api';

export const GET_CURRENT_USER_START = 'GET_CURRENT_USER_START';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR';

function getCurrentUserStart() {
  return {
    type: GET_CURRENT_USER_START,
    isFetching: true,
  };
}

function getCurrentUserSuccess(user) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    user,
    isFetching: false,
  };
}

function getCurrentUserError(error) {
  return {
    type: GET_CURRENT_USER_ERROR,
    error,
    isFetching: false,
  };
}


export function getCurrentUser() {
  return async (dispatch) => {
    dispatch(getCurrentUserStart());
    try {
      const user = await api.getUserInformation();
      dispatch(getCurrentUserSuccess(user));
    } catch (error) {
      dispatch(getCurrentUserError(error));
    }
  };
}
