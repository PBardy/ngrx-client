import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserProductService } from '@services/user-product.service';
import {
  addManyUserProducts,
  prefetchUserProducts,
} from '@store/actions/user-product.actions';
import { catchError, EMPTY, exhaustMap, from, map, switchMap } from 'rxjs';
import { ApiEffects } from './api.effects';

@Injectable()
export class UserProductEffects extends ApiEffects {
  public readonly prefetchUserProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchUserProducts),
      exhaustMap(() =>
        this.userProductService.getAll().pipe(
          map((res) => addManyUserProducts({ userProducts: res.data })),
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
    protected readonly userProductService: UserProductService
  ) {
    super(snackbar);
  }
}
