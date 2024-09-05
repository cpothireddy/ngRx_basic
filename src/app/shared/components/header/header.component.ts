import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAUthenticated: Observable<boolean>;
  constructor(private store:Store<AppState>){}
  ngOnInit(){
    this.isAUthenticated = this.store.select(isAuthenticated);
  }
}
