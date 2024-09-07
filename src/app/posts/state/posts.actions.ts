import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';

export const ADD_POST_ACTION = '[posts page] add post';
export const ADD_POST_SUCCESS = '[posts page] add post success';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const UPDATE_POST_SUCCESS = '[post page] update success';

export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_SUCCESS = '[posts page] delete post success';

export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Posts }>());
export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Posts }>()
);

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Posts }>()
);
export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: Update<Posts> }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);

export const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>()
);

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Posts[] }>()
);
