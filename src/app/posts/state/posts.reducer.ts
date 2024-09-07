import { createReducer, on } from '@ngrx/store';
import { initialState, postsAdapter } from './posts.state';
import {
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPostSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';

const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postsAdapter.addOne(action.post, state);
    // let post = { ...action.post };
    // return {
    //   ...state,
    //   posts: [...state.posts, post],
    // };
  }),
  on(updatePostSuccess, (state, action) => {
    return postsAdapter.updateOne(action.post, state);
    // const updatePosts = state.posts.map((post) => {
    //   return action.post.id === post.id ? action.post : post;
    // });
    // return {
    //   ...state,
    //   posts: updatePosts,
    // };
  }),
  on(deletePostSuccess, (state, { id }) => {
    return postsAdapter.removeOne(id, state);
    // const updatedPosts = state.posts.filter((post) => {
    //   return post.id !== id;
    // });
    // return {
    //   ...state,
    //   posts: updatedPosts,
    // };
  }),
  on(loadPostSuccess, (state, action) => {
    return postsAdapter.setAll(action.posts, state);
    // return {
    //   ...state,
    //   posts: action.posts,
    // };
  })
);

export function postsReducer(state, action) {
  return _postReducer(state, action);
}
