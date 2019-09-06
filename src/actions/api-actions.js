import * as api from '../api/api-api';

export const GET_API_INFORMATION = 'GET_API_INFORMATION';
export const GET_API_INFORMATION_SUCCESS = 'GET_API_INFORMATION_SUCCESS';
export const GET_API_INFORMATION_ERROR = 'GET_API_INFORMATION_ERROR';

/**
 * Notifies the application store that the get api information call has started,
 * and tells the reducer that handles this action that it should upate the store
 * with the state as isFetching = true.
 */
function getAPIInformationStart() {
  return {
    type: GET_API_INFORMATION,
    isFetching: true,
  };
}

/**
 * Notifies the application store that the get api information call was successful,
 * and tells the reducer that handles this action that it should update the store
 * with the new api information.
 *
 * @param apiInformation the payload for the reducer.
 */
function getAPIInformationSuccess(apiInformation) {
  return {
    type: GET_API_INFORMATION_SUCCESS,
    apiInformation,
    isFetching: false,
  };
}

/**
 * Notifies the application store that the get api information call was unsuccessful,
 * and tells the reducer that handles this action that it should update the store
 * with the error
 *
 * @param apiInformation the payload for the reducer.
 */
function getAPIInformationError(error) {
  return {
    type: GET_API_INFORMATION_ERROR,
    error,
    isFetching: false,
  };
}

export function getAPIInformation() {
  return async (dispatch) => {
    dispatch(getAPIInformationStart());
    try {
      const apiInformation = await api.getAPIInformation();
      dispatch(getAPIInformationSuccess(apiInformation));
    } catch (error) {
      dispatch(getAPIInformationError(error));
    }
  };
}
