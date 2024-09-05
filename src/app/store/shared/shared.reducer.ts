import { createReducer, on } from "@ngrx/store";
import { initalState } from "./shared.state";
import { setErrorMessage, setLoadingSpinner } from "./shared.actions";

const _sharedReducer = createReducer(
  initalState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function SharedReducer(state, action){
    return _sharedReducer(state, action);
}