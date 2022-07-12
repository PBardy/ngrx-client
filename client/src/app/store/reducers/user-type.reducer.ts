import { IUserType } from '@interfaces/models/user-type.interface';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { setManyUserTypes } from '@store/actions/user-type.actions';

export interface IUserTypeState extends EntityState<IUserType> {
  loaded: boolean;
}

const selectId = (a: IUserType): string => {
  return a.uuid;
};

const sortComparer = (a: IUserType, b: IUserType): number => {
  return a.name.localeCompare(b.name);
};

export const userTypeAdapter = createEntityAdapter<IUserType>({
  selectId,
  sortComparer,
});

const initialState: IUserTypeState = userTypeAdapter.getInitialState({
  loaded: false,
});

export const userTypeReducer = createReducer(
  initialState,
  on(setManyUserTypes, (state, { userTypes }) => {
    return userTypeAdapter.setMany(userTypes, state);
  })
);

export const userTypeFeature = createFeature({
  name: 'userType',
  reducer: userTypeReducer,
});
