import * as api from '../api/measures-api';


export const CREATE_NEW_MEASURE = 'CREATE_NEW_MEASURE';
export const CREATE_NEW_MEASURE_START = 'CREATE_NEW_MEASURE_START';
export const CREATE_NEW_MEASURE_ERROR = 'CREATE_NEW_MEASURE_ERROR';
export const CREATE_NEW_MEASURE_SUCCESS = 'CREATE_NEW_MEASURE_SUCCESS';


function createNewMeasureStart() {
  return {
    type: CREATE_NEW_MEASURE_START,
    isFetching: true,
  };
}

function createNewMeasureSuccess(newMeasureInformation) {
  return {
    type: CREATE_NEW_MEASURE_SUCCESS,
    payload: newMeasureInformation,
    isFetching: false,
  };
}

function createNewMeasureError(error) {
  return {
    type: CREATE_NEW_MEASURE_ERROR,
    error,
    isFetching: false,
  };
}

export function createNewMeasure(newMeasureInformation) {
  return async (dispatch) => {
    dispatch(createNewMeasureStart());
    try {
      const createdMeasure = await api.createNewMeasure(newMeasureInformation);
      dispatch(createNewMeasureSuccess(createdMeasure));
      return createdMeasure;
    } catch (error) {
      dispatch(createNewMeasureError(error));
      return null;
    }
  };
}
