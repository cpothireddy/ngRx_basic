import { createReducer, on } from '@ngrx/store';
import { initialPostsState } from './posts.state';
import {
  addPostSuccess,
  deletePost,
  loadPostSuccess,
  updatePost,
} from './posts.actions';

const _postReducer = createReducer(
  initialPostsState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatePosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatePosts,
    };
  }),
  on(deletePost, (state, { id }) => {
    const updatedPosts = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(loadPostSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postsReducer(state, action) {
  return _postReducer(state, action);
}
