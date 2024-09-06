import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletePost, loadPosts } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  posts: Observable<Posts[]>
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.posts = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }

  onDeletePost(id:string){
    if(confirm('Are sure to delete ?')){
      this.store.dispatch(deletePost({id}));
    }
  }

}
