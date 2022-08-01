import { IUser } from '@interfaces/models/user.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface IUsersState extends EntityState<IUser> {
  loaded: boolean;
}

export function selectId(a: IUser): string {
  return a.uuid;
}

export function sortComparer(a: IUser, b: IUser): number {
  return a.lastName.localeCompare(b.lastName);
}

export const usersAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
  selectId,
  sortComparer,
});

export const initialState: IUsersState = usersAdapter.getInitialState({
  loaded: false,
});

export const usersReducer = createReducer(initialState);
