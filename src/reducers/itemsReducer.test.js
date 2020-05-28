import { items as itemsReducer } from './items';
import * as actions from '../actions/items';

describe('ItemsReducer', () => {
  it('Should load data when passed ITEMS_FETCH_DATA_SUCCESS', () => {
    const initialState = [];
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

    const action = actions.itemsFetchDataSuccess(items);

    const newState = itemsReducer(initialState, action);

    expect(newState.length).toEqual(9);
    expect(newState[0].label).toEqual('List item 1');
    expect(newState[8].id).toEqual(9);
  });
});
