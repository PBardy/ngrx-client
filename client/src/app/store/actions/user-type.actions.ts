import { IUserType } from '@interfaces/models/user-type.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchUserTypes = createAction('user/types/prefetch');

export const setManyUserTypes = createAction(
  'user/types/setMany',
  props<{ userTypes: Array<IUserType> }>()
);
