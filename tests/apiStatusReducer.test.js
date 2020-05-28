import apiCallStatusReduce from '../src/reducers/apiStatusReducer';
import * as actions from '../src/actions/apiStatusAction';

describe('apiStatusReducer', () => {
  it('Should increment amount of api calls when passed BEGIN_API_CALL', () => {
    const initialState = 0;
    const action = actions.beginApiCall();
    const newState = apiCallStatusReduce(initialState, action);

    expect(newState).toEqual(1);
  });

  it('Should decrement amount of api calls when passed API_CALL_ERROR', () => {
    const initialState = 1;
    const action = actions.apiCallError();
    const newState = apiCallStatusReduce(initialState, action);

    expect(newState).toEqual(0);
  });
});
