import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Posts } from "src/app/models/posts.model";

export interface PostsState extends EntityState<Posts>{};

export const postsAdapter = createEntityAdapter<Posts>();

export const initialState: PostsState = postsAdapter.getInitialState();



// export interface PostState{
//     posts: Posts[];
// }

// export const initialPostsState:PostState = {
//     posts:null
// }