import { createReducer, updateObject } from './reducer-utils';

const initialAuthState = {
  access_token: '',
  expires_in: 0,
  isValid: false,
  isFetching: true,
  error: {

  },
};

export function exchangeCodeForAccessToken(state, action) {
  return updateObject(state, action.isFetching);
}

export function exchangeCodeForAccessTokenSuccess(state, action) {
  updateObject(state, initialAuthState);
  return updateObject(state, action.accessToken);
}

export function exchangeCodeForAccessTokenError(state, action) {
  updateObject(state, initialAuthState);
  return updateObject(state.error, action.error);
}

export function checkAccessTokenValidity(state, action) {
  return updateObject(state, action.isFetching);
}

export function checkAccessTokenValiditySuccess(state, action) {
  if (!action.isValid) {
    return updateObject(state, initialAuthState);
  }

  return updateObject(state, {
    ...state,
    isValid: action.isValid,
  });
}

export function checkAccessTokenValidityError(state, action) {
  updateObject(state, initialAuthState);
  return updateObject(state.error, action.error);
}

const authReducer = createReducer(initialAuthState, {
  EXCHANGE_CODE_FOR_ACCESS_TOKEN: exchangeCodeForAccessToken,
  EXCHANGE_CODE_FOR_ACCESS_TOKEN_SUCCESS: exchangeCodeForAccessTokenSuccess,
  EXCHANGE_CODE_FOR_ACCESS_TOKEN_ERROR: exchangeCodeForAccessTokenError,
  CHECK_ACCESS_TOKEN_VALIDITY: checkAccessTokenValidity,
  CHECK_ACCESS_TOKEN_VALIDITY_SUCCESS: checkAccessTokenValiditySuccess,
  CHECK_ACCESS_TOKEN_VALIDITY_ERROR: checkAccessTokenValidityError,
});

export default authReducer;
