import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  post:Observable<Posts>;
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.post = this.store.select(getPostById);
  }

}
