import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, take } from 'rxjs';
import { AppState } from '../store/app.state';
import { getToken } from '../auth/state/auth.selector';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // on logout action, we are making the user as null, so the user object is modyfying and the select of getToken is associated with user object, so here we are selecting getToken multiple times, whenever user gets updated so make it take(1)
    return this.store.select(getToken).pipe(
      take(1),
      exhaustMap((token)=>{
        if(!token){
            return next.handle(req);
        }
        let modifiedReq = req.clone({
            params: req.params.append('auth', token)
        })
        return next.handle(modifiedReq);
    }))
    
  }
}
