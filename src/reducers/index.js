import { combineReducers } from 'redux';
import { items } from './items';
import apiCallsInProgress from './apiStatusReducer';

export default combineReducers({
  items,
  apiCallsInProgress,
});
