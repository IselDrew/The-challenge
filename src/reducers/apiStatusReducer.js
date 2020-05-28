import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSucces(type) {
  if (type.substring(type.length - 8) === '_SUCCESS') {
    return type;
  }
}

export default function apiCallStatusReduce(
  state = initialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case types.BEGIN_API_CALL:
      return state + 1;
    case types.API_CALL_ERROR:
    case actionTypeEndsInSucces(action.type):
      return state - 1;
    default:
      return state;
  }
}
