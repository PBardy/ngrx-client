import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@services/auth.service';
import {
  refreshSession,
  signIn,
  signInFailure,
  signInSuccess,
  signOut,
  signOutFailure,
  signOutSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from '@store/actions/auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  public readonly signIn$ = createEffect(() =>
    this.actions.pipe(
      ofType(signIn),
      exhaustMap(({ email, password }) =>
        this.authService.signIn({ email, password }).pipe(
          map((res) => signInSuccess(res.data)),
          catchError((err) => of(signInFailure({ error: err })))
        )
      )
    )
  );

  public readonly signUp$ = createEffect(() =>
    this.actions.pipe(
      ofType(signUp),
      exhaustMap(({ email, password, firstName, lastName, userType }) =>
        this.authService
          .signUp({ email, password, firstName, lastName, userType })
          .pipe(
            map((res) => signUpSuccess(res.data)),
            catchError((err) => of(signUpFailure({ error: err })))
          )
      )
    )
  );

  public readonly signOut$ = createEffect(() =>
    this.actions.pipe(
      ofType(signOut),
      exhaustMap(({ reason }) =>
        this.authService.signOut({ reason }).pipe(
          map(signOutSuccess),
          catchError((err) => of(signOutFailure))
        )
      )
    )
  );

  public readonly refreshSession$ = createEffect(() =>
    this.actions.pipe(
      ofType(refreshSession),
      exhaustMap(() =>
        this.authService.refreshSession().pipe(
          map((res) => signInSuccess(res.data)),
          catchError((err) => of(signInFailure({ error: err })))
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly authService: AuthService
  ) {}
}
