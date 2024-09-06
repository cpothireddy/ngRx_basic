import { Posts } from "src/app/models/posts.model"

export interface PostState{
    posts: Posts[];
}

export const initialPostsState:PostState = {
    posts:null
}