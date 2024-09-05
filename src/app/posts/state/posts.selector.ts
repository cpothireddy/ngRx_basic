import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";
import { Posts } from 'src/app/models/posts.model';

export const POST_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state)=>{
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
    
    const postnew = state.posts.find(post => post.id === +props.id);
    console.log('propsId', postnew);
    return postnew;
})
