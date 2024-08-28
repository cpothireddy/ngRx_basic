import { createReducer } from "@ngrx/store";
import { initialPostsState } from "./posts.state";


const _postReducer = createReducer(initialPostsState);


export function postsReducer(state, action){
    return _postReducer(state, action);
}
