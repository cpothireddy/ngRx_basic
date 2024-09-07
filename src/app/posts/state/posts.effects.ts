import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from 'src/app/services/posts.service';
import { Update } from '@ngrx/entity';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';
import { filter, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigatedAction, RouterNavigationAction } from '@ngrx/router-store';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getPosts } from './posts.selector';
import { dummyAction } from 'src/app/auth/state/auth.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store: Store<AppState>
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      withLatestFrom(this.store.select(getPosts)),
      mergeMap(([action, posts]) => {
        if(!posts.length || posts.length ===1) {
          return this.postsService.getPosts().pipe(
            map((posts) => {
              return loadPostSuccess({ posts });
            })
          );
          }
        return of(dummyAction());
      })
    );
  });

  addPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((data) => {
            const updatedPost: Update<Posts> = {
              id: action.post.id,
              changes: {
                ...action.post,
              },
            };
            return updatePostSuccess({ post: updatedPost });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });

  getSinglePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getPosts)),
      switchMap(([id, posts]) => {
        if (!posts.length) {
          return this.postsService.getPostById(id).pipe(
            map((post) => {
              const postData = [{ ...post, id }];
              return loadPostSuccess({ posts: postData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
}
