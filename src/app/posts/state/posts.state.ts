import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Posts } from "src/app/models/posts.model";

export interface PostsState extends EntityState<Posts>{
    count:number;
};
//if you want to add any custom data then createEntityAdapter should expect a primary unique Id
export const postsAdapter = createEntityAdapter<Posts>({
    sortComparer: sortByName
});

export const initialState: PostsState = postsAdapter.getInitialState({
    count: 0,
});

export function sortByName(a: Posts, b: Posts): number {
  //return a.title.localeCompare(b.title); // ascending order
  const compare = a.title.localeCompare(b.title);
  if (compare > 0) {
    return -1;
  }
  if (compare < 0) {
    return 1;
  }
  return compare;
}
