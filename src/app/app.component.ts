import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRx-course';
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;
  constructor(private store:Store<AppState>){}
  ngOnInit(){
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
