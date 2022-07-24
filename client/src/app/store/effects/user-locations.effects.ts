import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteUserLocationSnackbarComponent } from '@modules/customer/components/snackbars/delete-user-location-snackbar/delete-user-location-snackbar.component';
import { DeleteUserLocationsSnackbarComponent } from '@modules/customer/components/snackbars/delete-user-locations-snackbar/delete-user-locations-snackbar.component';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserLocationService } from '@services/user-location.service';
import {
  addManyAutoSuggestions,
  addManyUserLocations,
  addOneUserLocation,
  createManyUserLocationsFromLocations,
  createUserLocation,
  deleteManyUserLocationsFromLocations,
  deleteUserLocation,
  deleteUserLocations,
  prefetchUserLocationAutoSuggestions,
  prefetchUserLocations,
  removeManyUserLocations,
  removeOneUserLocation,
} from '@store/actions/user-locations.actions';
import { catchError, EMPTY, exhaustMap, from, map, switchMap, tap } from 'rxjs';
import { ApiEffects } from './api.effects';

@Injectable()
export class UserLocationEffects extends ApiEffects {
  public readonly prefetchUserLocations$ = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchUserLocations),
      exhaustMap(() =>
        this.userLocationService.getAll().pipe(
          map((res) => addManyUserLocations({ userLocations: res.data })),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly prefetchUserLocationAutoSuggestions$ = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchUserLocationAutoSuggestions),
      exhaustMap(() =>
        this.userLocationService.getAutoSuggestions().pipe(
          map((res) => addManyAutoSuggestions({ autoSuggestions: res.data })),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly createUserLocation$ = createEffect(() =>
    this.actions.pipe(
      ofType(createUserLocation),
      exhaustMap(({ userLocation }) =>
        this.userLocationService.createOne(userLocation).pipe(
          map((res) => addOneUserLocation({ userLocation: res.data })),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly deleteUserLocation$ = createEffect(() =>
    this.actions.pipe(
      ofType(deleteUserLocation),
      exhaustMap(({ userLocationId }) =>
        this.userLocationService.deleteOne(userLocationId).pipe(
          tap((res) =>
            this.snackbar.openFromComponent(
              DeleteUserLocationSnackbarComponent,
              { data: { userLocation: res.data } }
            )
          ),
          map((res) => removeOneUserLocation({ userLocation: res.data })),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly deleteManyUserLocations$ = createEffect(() =>
    this.actions.pipe(
      ofType(deleteUserLocations),
      exhaustMap(({ userLocationIds }) =>
        this.userLocationService.deleteMany(userLocationIds).pipe(
          tap((res) =>
            this.snackbar.openFromComponent(
              DeleteUserLocationsSnackbarComponent,
              { data: { userLocations: res.data } }
            )
          ),
          map((res) => removeManyUserLocations({ userLocations: res.data })),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly createManyFromLocations$ = createEffect(() =>
    this.actions.pipe(
      ofType(createManyUserLocationsFromLocations),
      exhaustMap(({ locationIds }) =>
        this.userLocationService.createManyFromLocations(locationIds).pipe(
          map((res) => addManyUserLocations({ userLocations: res.data })),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public constructor(
    protected readonly actions: Actions,
    protected override readonly snackbar: MatSnackBar,
    protected readonly userLocationService: UserLocationService
  ) {
    super(snackbar);
  }
}
