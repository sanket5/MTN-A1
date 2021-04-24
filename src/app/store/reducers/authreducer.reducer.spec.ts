import * as fromReducer from './authreducer.reducer';
import * as authAction from './../actions/authaction.actions';

describe('Store > Data > DataReducer', () => {

  it('SHOULD return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(undefined, { type: null })
    expect(state).toBe(initialState);
  })
  });
