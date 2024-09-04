import { createAction, props } from "@ngrx/store";
import { Posts } from "src/app/models/posts.model";

export const ADD_POST_ACTION = '[posts page] add post';

export const addPost = createAction(ADD_POST_ACTION, props<{post:Posts}>());