import { createReducer, on } from "@ngrx/store";
import { initialPostsState } from "./posts.state";
import { addPost } from "./posts.actions";

const _postReducer = createReducer(initialPostsState, on(addPost, (state, action) =>{
    let post = { ...action.post };
    post.id = state.posts.length + 1;
    return {
        ...state,
        posts: [...state.posts, post]
    }
}));


export function postsReducer(state, action){
    return _postReducer(state, action);
}
