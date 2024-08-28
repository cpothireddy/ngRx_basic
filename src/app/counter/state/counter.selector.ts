import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

const getCounterState = createFeatureSelector<counterState>('counter');

// Here the counter is a state name which we declared in app module.

// the below one will use to read only for the counter property inside the state
export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});
// the below one is for channelName
export const getChannelName = createSelector(getCounterState, (state) => {
    return state.channelName;
})


