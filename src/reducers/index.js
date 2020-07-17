import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import partyReducer from './partyReducer';

export default combineReducers({
  gameReducer,
  partyReducer,
});
