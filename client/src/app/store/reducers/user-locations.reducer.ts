import { ILocation } from '@interfaces/models/location.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface IUserLocationsState extends EntityState<ILocation> {}

export function selectId(a: ILocation): string {
  return a.uuid;
}

export function sortComparer(a: ILocation, b: ILocation): number {
  return a.name.localeCompare(b.name);
}

export const userLocationsAdpater: EntityAdapter<ILocation> =
  createEntityAdapter<ILocation>({
    selectId,
    sortComparer,
  });

export const initialState: IUserLocationsState =
  userLocationsAdpater.getInitialState({});

export const userLocationsReducer = createReducer(initialState);
