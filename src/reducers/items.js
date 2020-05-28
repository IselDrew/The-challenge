import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function items(state = initialState.items, action) {
  switch (action.type) {
    case types.ITEMS_FETCH_DATA_SUCCESS:
      return action.items;
    default:
      return state;
  }
}
