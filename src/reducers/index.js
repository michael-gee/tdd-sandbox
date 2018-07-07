import { combineReducers } from 'redux';
import initialStateReducer from './initial-state-reducer';

export default combineReducers({
  initialState: initialStateReducer
});