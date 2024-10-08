import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Posts[]> {
    return this.http
      .get<Posts[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          const posts: Posts[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }
  addPost(post: Posts): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      post
    );
  }
  updatePost(post: Posts) {
    const postData = {
      [post.id]: { title: post.title, description: post.description },
    };
    return this.http.patch(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      postData
    );
  }
  deletePost(id:string) {
    return this.http.delete(`https://vue-completecourse.firebaseio.com/posts/${id}.json`);
  }

  getPostById(id:string):Observable<Posts> {
    return this.http.get<Posts>(`https://vue-completecourse.firebaseio.com/posts/${id}.json`);
  }
}
