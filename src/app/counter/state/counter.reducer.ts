import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { changeChannelName, customIncrement, decrement, increment, reset } from './counter.actions';

//createReducer with two paramerts state, initalState will consider for fresh call, and then action will call using on method.

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    // here reducer will take the state and return the same state with extra data.
    // that means state is always immutable and, here we are not modifying the existing and we are return as a new state.
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log('action', action);
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeChannelName, (state, action) => {
    return {
      ...state,
      channelName:'new channel'
    }
  })
);

// lets create a pure funciton with two paramerts state and action
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
