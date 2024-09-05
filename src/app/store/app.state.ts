import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedReducer } from './shared/shared.reducer';

export interface AppState {
    [SHARED_STATE_NAME]: 'SharedState';
}

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer
}