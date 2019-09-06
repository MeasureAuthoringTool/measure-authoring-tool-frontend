import * as api from '../api/measures-api';

export const SET_CURRENT_MEASURE_ID = 'SET_CURRENT_MEASURE_ID';
export const GET_MEASURE_INFORMATION_START = 'GET_MEASURE_INFORMATION_START';
export const GET_MEASURE_INFORMATION_ERROR = 'GET_MEASURE_INFORMATION_ERROR';
export const GET_MEASURE_INFORMATION_SUCCESS = 'GET_MEASURE_INFORMATION_SUCCESS';

export function setCurrentMeasureId(id) {
  return {
    type: SET_CURRENT_MEASURE_ID,
    id,
  };
}

function getMeasureInformationStart() {
  return {
    type: GET_MEASURE_INFORMATION_START,
    isFetching: true,
  };
}

function getMeasureInformationSuccess(measureInformation) {
  return {
    type: GET_MEASURE_INFORMATION_SUCCESS,
    measureInformation,
    isFetching: true,
  };
}

function getMeasureInformationError(error) {
  return {
    type: GET_MEASURE_INFORMATION_ERROR,
    error,
    isFetching: false,
  };
}

export function getMeasureInformationById(id) {
  return async (dispatch) => {
    dispatch(getMeasureInformationStart());
    try {
      const measureInformation = await api.getMeasureById(id);
      dispatch(getMeasureInformationSuccess(measureInformation));
    } catch (error) {
      dispatch(getMeasureInformationError(error));
    }
  };
}
