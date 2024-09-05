import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.actions";


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store:Store<AppState>) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            this.store.dispatch(setLoadingSpinner({status:false}));
            this.store.dispatch(setErrorMessage({message:''}));
            return loginSuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({status: false}));
            const errorMessage = this.authService.getErrorMessage(errResp.error.error.message);
            return of(setErrorMessage({message: errorMessage}));
          })
        );
      })
    );
  });
}