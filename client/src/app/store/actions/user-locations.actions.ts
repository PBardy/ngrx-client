import { ILocation } from '@interfaces/models/location.interface';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchUserLocations = createAction('user/locations/prefetch');

export const prefetchUserLocationAutoSuggestions = createAction(
  'user/locations/prefetch/auto-suggestions'
);

export const addOneUserLocation = createAction(
  'user/locations/add-one',
  props<{ userLocation: any }>()
);

export const addManyUserLocations = createAction(
  'user/locations/add-many',
  props<{ userLocations: Array<IUserLocation> }>()
);

export const removeOneUserLocation = createAction(
  'user/locations/remove-one',
  props<{ userLocation: any }>()
);

export const removeManyUserLocations = createAction(
  'user/locations/remove-many',
  props<{ userLocations: Array<IUserLocation> }>()
);

export const createUserLocation = createAction(
  'user/locations/create-one',
  props<{ userLocation: Partial<IUserLocation> }>()
);

export const deleteUserLocation = createAction(
  'user/locations/delete-one',
  props<{ userLocationId: string }>()
);

export const deleteUserLocations = createAction(
  'user/locations/delete-many',
  props<{ userLocationIds: Array<string> }>()
);

export const addManyAutoSuggestions = createAction(
  'user/locations/auto-suggestions/add',
  props<{ autoSuggestions: Array<ILocation> }>()
);

export const createManyUserLocationsFromLocations = createAction(
  'user/locations/from/locations/remove-many',
  props<{ locationIds: Array<string> }>()
);

export const deleteManyUserLocationsFromLocations = createAction(
  'user/locations/from/locations/remove-many',
  props<{ locationIds: Array<string> }>()
);
