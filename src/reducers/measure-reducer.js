import { createReducer, updateObject } from './reducer-utils';

const initialMeasureState = {
  id: '',
  familyId: '',
  name: '',
  eCQMAbbreviatedTitle: '',
  eMeasureId: '',
  version: '',
  releaseVersion: '',
  qdmVersion: '',
  patientBased: true,
  measureScoring: true,
  owner: {
    id: '',
    name: '',
  },
  draft: false,
  editable: false,
  cloneable: false,
  exportable: false,
  isFetching: false,
  error: {},
};

function setCurrentMeasureId(state, action) {
  return updateObject(state, {
    ...state,
    id: action.id,
  });
}

function getMeasureInformationStart(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
  });
}

function getMeasureInfomrationError(state, action) {
  return updateObject(state, {
    ...state,
    isFetching: action.isFetching,
    error: action.error,
  });
}

function getMeasureInformationSuccess(state, action) {
  return updateObject(state, {
    ...state,
    id: action.measureInformation.id,
    familyId: action.measureInformation.familyId,
    name: action.measureInformation.name,
    eCQMAbbreviatedTitle: action.measureInformation.eCQMAbbreviatedTitle,
    eMeasureId: action.measureInformation.eMeasureId,
    version: action.measureInformation.version,
    releaseVersion: action.measureInformation.releaseVersion,
    qdmVersion: action.measureInformation.qdmVersion,
    patientBased: action.measureInformation.patientBased,
    measureScoring: action.measureInformation.measureScoring,
    owner: {
      id: action.measureInformation.owner.id,
      name: action.measureInformation.owner.name,
    },
    draft: action.measureInformation.draft,
    editable: action.measureInformation.editable,
    cloneable: action.measureInformation.cloneable,
    exportable: action.measureInformation.exportable,
    isFetching: false,
    error: {},
  });
}

const measureReducer = createReducer(initialMeasureState, {
  SET_CURRENT_MEASURE_ID: setCurrentMeasureId,
  GET_MEASURE_INFORMATION_START: getMeasureInformationStart,
  GET_MEASURE_INFORMATION_ERROR: getMeasureInfomrationError,
  GET_MEASURE_INFORMATION_SUCCESS: getMeasureInformationSuccess,
});


export default measureReducer;
