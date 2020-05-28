import * as apiStatusAction from '../src/actions/apiStatusAction';
import * as types from '../src/actions/actionTypes';

describe('beginApiCall', () => {
  it('should create an BEGIN_API_CALL action', () => {
    const expectedAction = {
      type: types.BEGIN_API_CALL,
    };

    const action = apiStatusAction.beginApiCall();

    expect(action).toEqual(expectedAction);
  });
});

describe('apiCallError', () => {
  it('should create an API_CALL_ERROR action', () => {
    const expectedAction = {
      type: types.API_CALL_ERROR,
    };

    const action = apiStatusAction.apiCallError();

    expect(action).toEqual(expectedAction);
  });
});
