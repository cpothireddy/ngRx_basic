import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";
import { Posts } from 'src/app/models/posts.model';


const getPostsState = createFeatureSelector<PostState>('posts');


export const getPosts = createSelector(getPostsState, (state)=>{
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
    
    const postnew = state.posts.find(post => post.id === +props.id);
    console.log('propsId', postnew);
    return postnew;
})
