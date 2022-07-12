import { IUser } from '@interfaces/models/user.interface';
import { createReducer, on } from '@ngrx/store';
import {
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

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  error: boolean;
  loading: boolean;
  message: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: localStorage.getItem('token'),
  error: false,
  loading: false,
  message: null,
};

export const authReducer = createReducer<IAuthState>(
  initialState,
  on(signIn, (state) => {
    return { ...state, error: false, message: null, loading: true };
  }),
  on(signUp, (state) => {
    return { ...state, error: false, message: null, loading: true };
  }),
  on(signOut, (state) => {
    return { ...state, error: false, message: null, loading: true };
  }),
  on(signInSuccess, (state, payload) => {
    localStorage.setItem('token', payload.token);

    return {
      ...state,
      token: payload.token,
      user: payload.user,
      loading: false,
    };
  }),
  on(signUpSuccess, (state, payload) => {
    localStorage.setItem('token', payload.token);

    return {
      ...state,
      token: payload.token,
      user: payload.user,
      loading: false,
    };
  }),
  on(signOutSuccess, (state) => {
    return { ...state, loading: false };
  }),
  on(signInFailure, (state, payload) => {
    return {
      ...state,
      user: null,
      token: null,
      error: true,
      loading: false,
      message: payload.error.message,
    };
  }),
  on(signUpFailure, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: true,
      message: payload.error.message,
    };
  }),
  on(signOutFailure, (state) => {
    return { ...state, loading: false };
  })
);
