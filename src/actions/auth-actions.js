import * as authApi from '../api/auth-api';

export const EXCHANGE_CODE_FOR_ACCESS_TOKEN = 'EXCHANGE_CODE_FOR_ACCESS_TOKEN';
export const EXCHANGE_CODE_FOR_ACCESS_TOKEN_SUCCESS = 'EXCHANGE_CODE_FOR_ACCESS_TOKEN_SUCCESS';
export const EXCHANGE_CODE_FOR_ACCESS_TOKEN_ERROR = 'EXCHANGE_CODE_FOR_ACCESS_TOKEN_ERROR';
export const CHECK_ACCESS_TOKEN_VALIDITY = 'CHECK_ACCESS_TOKEN_VALIDITY';
export const CHECK_ACCESS_TOKEN_VALIDITY_SUCCESS = 'CHECK_ACCESS_TOKEN_VALIDITY_SUCCESS';
export const CHECK_ACCESS_TOKEN_VALIDITY_ERROR = 'CHECK_ACCESS_TOKEN_VALIDITY_ERROR';

/**
 * Notifies the application store that exchanging a code for an access token has started
 * and tells the reducer that handles this action that it should update the store with
 * the state as isFetching = true.
 */
export function exchangeCodeForAccessTokenStart() {
  return {
    type: EXCHANGE_CODE_FOR_ACCESS_TOKEN,
    isFetching: true,
  };
}

/**
 * Notifies teh application store that exchanging a code for an access toekn was successful
 * and tells the reducer that handles this action that it should upate the store with the
 * new access token.
 */
export function exchangeCodeForAccessTokenSuccess(accessToken) {
  return {
    type: EXCHANGE_CODE_FOR_ACCESS_TOKEN_SUCCESS,
    accessToken,
    isFetching: false,
  };
}

/**
 * Notifies the application store that exchanging a code for an access token was unsuccessful
 * and tells the reducer that handles this action to update the store with the error information.
 */
export function exchangeCodeForAccessTokenError(error) {
  return {
    type: EXCHANGE_CODE_FOR_ACCESS_TOKEN_SUCCESS,
    error,
    isFetching: false,
  };
}

/**
 * An asynchronus action which handles exchanging a code for an access token. This
 * method dispatches an action to start the exchange process, makes the api call, and then
 * dispatches a call to the proper handler.
 *
 * @params code the code to exchange
 */
export function exchangeCodeForAccessToken(code) {
  return async (dispatch) => {
    dispatch(exchangeCodeForAccessTokenStart());
    try {
      const accessToken = await authApi.getAccessTokenForCode(code);
      dispatch(exchangeCodeForAccessTokenSuccess(accessToken));
    } catch (error) {
      dispatch(exchangeCodeForAccessTokenError(error));
    }
  };
}

export function checkAccessTokenValidityStart() {
  return {
    type: CHECK_ACCESS_TOKEN_VALIDITY,
    isFetching: true,
  };
}

export function checkAccessTokenValiditySuccess(isValid) {
  return {
    type: CHECK_ACCESS_TOKEN_VALIDITY_SUCCESS,
    isFetching: false,
    isValid,
  };
}

export function checkAccessTokenValidityError(isValid) {
  return {
    type: CHECK_ACCESS_TOKEN_VALIDITY_ERROR,
    isFetching: false,
    isValid,
  };
}

export function checkAccessTokenValidity(accessToken) {
  return async (dispatch) => {
    dispatch(checkAccessTokenValidityStart());
    try {
      const data = await authApi.checkAccessToken(accessToken);
      const isValid = data.active;
      dispatch(checkAccessTokenValiditySuccess(isValid));
    } catch (error) {
      dispatch(checkAccessTokenValidityError(false));
    }
  };
}
