import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { userLocationsAdpater } from '@store/reducers/user-locations.reducer';

const { selectAll } = userLocationsAdpater.getSelectors();

export const selectSelf = (state: IAppState) => state.userLocations;

export const selectAllUserLocations = createSelector(selectSelf, selectAll);

export const selectUserLocationById = (userLocationId: string) =>
  createSelector(selectAllUserLocations, (userLocations) =>
    userLocations.find((userLocation) => userLocation.uuid === userLocationId)
  );

export const selectUserLocationAutoSuggestions = createSelector(
  selectSelf,
  (state) => state.autoSuggestions
);
