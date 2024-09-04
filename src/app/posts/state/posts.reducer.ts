import { createReducer } from "@ngrx/store";
import { initialPostsState } from "./posts.state";

// Here, the intenetion is to have the initial state data, Here we are not considering any action and just returning same data what we reciveied initally, and that will read through the selector.
const _postReducer = createReducer(initialPostsState);


export function postsReducer(state, action){
    return _postReducer(state, action);
}
