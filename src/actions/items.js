import * as types from './actionTypes';
import { beginApiCall } from './apiStatusAction';

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
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)));
  };
}
