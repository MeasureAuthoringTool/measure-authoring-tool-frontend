import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import apiReducer from './api-reducer';
import authReducer from './auth-reducer';
import recentMeasuresReducer from './recent-measures-reducer';
import measuresReducer from './measure-reducer';
import recentLibrariesReducer from './recent-libraries-reducer';
import libraryReducer from './libraries-reducer';
import measureSearchReducer from './measure-search-reducer';

const rootReducer = combineReducers({
  users: userReducer,
  apiInformation: apiReducer,
  accessToken: authReducer,
  recentMeasures: recentMeasuresReducer,
  currentMeasure: measuresReducer,
  recentLibraries: recentLibrariesReducer,
  currentLibrary: libraryReducer,
  measureSearchResults: measureSearchReducer,
});

export default rootReducer;
