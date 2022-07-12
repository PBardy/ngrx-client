import { HttpErrorResponse } from '@angular/common/http';
import { ISignInRequest } from '@interfaces/requests/sign-in.request.interface';
import { ISignOutRequest } from '@interfaces/requests/sign-out.request.interface';
import { ISignUpRequest } from '@interfaces/requests/sign-up.request.interface';
import { ISignInResponse } from '@interfaces/responses/sign-in.response.interface';
import { ISignUpResponse } from '@interfaces/responses/sign-up.response.interface';
import { createAction, props } from '@ngrx/store';

export const signIn = createAction('auth/sign-in', props<ISignInRequest>());
export const signUp = createAction('auth/sign-up', props<ISignUpRequest>());
export const signOut = createAction('auth/sign-out', props<ISignOutRequest>());
export const refreshSession = createAction('auth/refresh-session');

export const signInSuccess = createAction(
  'auth/sign-in/success',
  props<ISignInResponse>()
);

export const signUpSuccess = createAction(
  'auth/sign-up/success',
  props<ISignUpResponse>()
);

export const signOutSuccess = createAction('auth/sign-out/success');

export const signInFailure = createAction(
  'auth/sign-in/failure',
  props<{ error: HttpErrorResponse }>()
);

export const signUpFailure = createAction(
  'auth/sign-up/failure',
  props<{ error: HttpErrorResponse }>()
);

export const signOutFailure = createAction('auth/sign-out/failure');
