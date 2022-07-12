import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAppState } from '@interfaces/store/states.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CartService } from '@services/cart.service';
import {
  addProductsToCart,
  addProductToCart,
  checkoutCart,
  checkoutCartSuccess,
} from '@store/actions/cart.actions';
import { selectCart } from '@store/selectors/cart.selectors';
import {
  catchError,
  EMPTY,
  exhaustMap,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';

@Injectable()
export class CartEffects {
  public readonly addProductToCart$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(addProductToCart),
        tap(() => this.snackbar.open('Item was added to cart', 'Close'))
      ),
    { dispatch: false }
  );

  public readonly addProductsToCart$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(addProductsToCart),
        tap(({ products }) =>
          this.snackbar.open(
            `(${products.length}) items was added to cart`,
            'Close'
          )
        )
      ),
    { dispatch: false }
  );

  public readonly checkoutCart$ = createEffect(() =>
    this.actions.pipe(
      ofType(checkoutCart),
      withLatestFrom(this.store.select(selectCart)),
      exhaustMap(([{ type, ...payload }, products]) =>
        this.cartService.checkOut({ ...payload, products }).pipe(
          map(() => checkoutCartSuccess()),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly cartService: CartService,
    private readonly snackbar: MatSnackBar,
    private readonly store: Store<IAppState>
  ) {}
}
