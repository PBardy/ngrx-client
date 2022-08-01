import { ILocation } from '@interfaces/models/location.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchLocations = createAction('locations/prefetch');

export const addOneLocation = createAction(
  'locations/addOne',
  props<{ location: ILocation }>()
);

export const addManylocations = createAction(
  'locations/addMany',
  props<{ locations: Array<ILocation> }>()
);

export const setOneLocation = createAction(
  'locations/setOne',
  props<{ location: ILocation }>()
);

export const setManyLocations = createAction(
  'locations/setMany',
  props<{ locations: Array<ILocation> }>()
);

export const removeOneLocation = createAction(
  'locations/removeOne',
  props<{ location: ILocation }>()
);

export const removeManyLocations = createAction(
  'locations/removeMany',
  props<{ locations: Array<ILocation> }>()
);
