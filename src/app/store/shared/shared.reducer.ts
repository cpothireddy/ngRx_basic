import { createReducer, on } from "@ngrx/store";
import { initalState } from "./shared.state";
import { setLoadingSpinner } from "./shared.actions";

const _sharedReducer = createReducer(initalState, on(setLoadingSpinner, (state, action) => {
    return {
        ...state,
        showLoading: action.status
    }
}))

export function SharedReducer(state, action){
    return _sharedReducer(state, action);
}