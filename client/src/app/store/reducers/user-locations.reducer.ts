import { ILocation } from '@interfaces/models/location.interface';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  addManyAutoSuggestions,
  addManyUserLocations,
  addOneUserLocation,
  removeManyUserLocations,
  removeOneUserLocation,
} from '@store/actions/user-locations.actions';

export interface IUserLocationsState extends EntityState<IUserLocation> {
  autoSuggestions: Array<ILocation>;
}

export function selectId(a: IUserLocation): string {
  return a.uuid;
}

export function sortComparer(a: IUserLocation, b: IUserLocation): number {
  return a.location.name.localeCompare(b.location.name);
}

export const userLocationsAdpater: EntityAdapter<IUserLocation> =
  createEntityAdapter<IUserLocation>({
    selectId,
    sortComparer,
  });

export const initialState: IUserLocationsState = {
  autoSuggestions: [],
  ...userLocationsAdpater.getInitialState({}),
};

export const userLocationsReducer = createReducer(
  initialState,
  on(addOneUserLocation, (state, action) => {
    return userLocationsAdpater.addOne(action.userLocation, state);
  }),
  on(addManyUserLocations, (state, action) => {
    return userLocationsAdpater.addMany(action.userLocations, state);
  }),
  on(removeOneUserLocation, (state, action) => {
    return userLocationsAdpater.removeOne(action.userLocation.uuid, state);
  }),
  on(removeManyUserLocations, (state, action) => {
    const uuids = action.userLocations.map((userLocation) => userLocation.uuid);
    return userLocationsAdpater.removeMany(uuids, state);
  }),
  on(addManyAutoSuggestions, (state, action) => {
    return {
      ...state,
      autoSuggestions: [...state.autoSuggestions, ...action.autoSuggestions],
    };
  })
);
