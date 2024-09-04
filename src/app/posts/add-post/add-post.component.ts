import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  postForm: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors():any {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors['required']) {
        return 'Description is required';
      }
      if (descriptionForm.errors['minlength']) {
        return 'Decription should be of minimum 10 chars'
      }
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);
    // id is not mandatory, since we marked it as optional in posts.model
    const post: Posts = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }))

  }
}
