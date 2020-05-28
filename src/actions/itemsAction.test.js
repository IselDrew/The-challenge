import * as itemsAction from './items';
import * as types from './actionTypes';

describe('itemsFetchDataSuccess', () => {
  it('should create an ITEMS_FETCH_DATA_SUCCESS action', () => {
    const items = [
      { id: 1, label: 'List item 1', parent_id: 0 },
      { id: 2, label: 'List item 2', parent_id: 0 },
      { id: 3, label: 'List item 3', parent_id: 0 },
      { id: 4, label: 'List item 4', parent_id: 0 },
      { id: 5, label: 'List item 5', parent_id: 1 },
      { id: 6, label: 'List item 6', parent_id: 1 },
      { id: 7, label: 'List item 7', parent_id: 1 },
      { id: 8, label: 'List item 8', parent_id: 7 },
      { id: 9, label: 'List item 9', parent_id: 7 },
    ];
    const expectedAction = {
      type: types.ITEMS_FETCH_DATA_SUCCESS,
      items,
    };

    const action = itemsAction.itemsFetchDataSuccess(items);

    expect(action).toEqual(expectedAction);
  });
});
