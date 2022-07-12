import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShippingMethodsService } from '@services/shipping-methods.service';
import {
  addManyShippingMethods,
  prefetchShippingMethods,
} from '@store/actions/shipping-methods.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { ApiEffects } from './api.effects';

@Injectable()
export class ShippingMethodEffects extends ApiEffects {
  public readonly prefetch = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchShippingMethods),
      exhaustMap(() =>
        this.shippingMethodsService.getAll().pipe(
          map((res) => addManyShippingMethods({ shippingMethods: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  public constructor(
    protected readonly actions: Actions,
    protected override readonly snackbar: MatSnackBar,
    protected readonly shippingMethodsService: ShippingMethodsService
  ) {
    super(snackbar);
  }
}
