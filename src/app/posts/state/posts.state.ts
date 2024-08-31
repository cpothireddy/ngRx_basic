import { Posts } from "src/app/models/posts.model"

export interface PostState{
    posts: Posts[];
}

export const initialPostsState:PostState = {
    posts:[
        { id:1, title:'sample title 1', description:'sample description'},
        { id:2, title:'sample title 2', description:'sample description 2'}
    ]
}