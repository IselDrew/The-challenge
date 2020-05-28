import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusAction';

export function itemsFetchDataSuccess(items) {
  return {
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items,
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(beginApiCall());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          dispatch(apiCallError(response.statusText));
          return;
        }

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)));
  };
}
