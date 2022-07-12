import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UserService } from '@services/user.service';
import {
  prefetchUserTypes,
  setManyUserTypes,
} from '@store/actions/user-type.actions';
import { IUserTypeState } from '@store/reducers/user-type.reducer';
import {
  catchError,
  EMPTY,
  exhaustMap,
  filter,
  map,
  of,
  withLatestFrom,
} from 'rxjs';

@Injectable()
export class UserTypeEffects {
  public readonly prefetchUserTypes$ = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchUserTypes),
      withLatestFrom(this.userTypeStore),
      filter(([_, state]) => !state.loaded),
      exhaustMap(() =>
        this.userService.getTypes().pipe(
          map((res) => setManyUserTypes({ userTypes: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly userService: UserService,
    private readonly userTypeStore: Store<IUserTypeState>
  ) {}
}
