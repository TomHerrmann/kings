import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import partyReducer from './partyReducer';
import socketReducer from './socketReducer';

export default combineReducers({
  gameReducer,
  partyReducer,
  socketReducer,
});
