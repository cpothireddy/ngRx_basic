import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterSateUrl } from "./custom-serializer";

export const getRouterState = createFeatureSelector<RouterReducerState<RouterSateUrl>>('router');

export const getCurrentRoute = createSelector(getRouterState, (router) => {
    return router.state;
})