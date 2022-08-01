import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAppState } from '@interfaces/store/states.interface';
import { ProductsAddedToCartSnackbarComponent } from '@modules/customer/components/snackbars/products-added-to-cart-snackbar/products-added-to-cart-snackbar.component';
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
import { catchError, EMPTY, exhaustMap, map, tap, withLatestFrom } from 'rxjs';

@Injectable()
export class CartEffects {
  public readonly addProductToCart$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(addProductToCart),
        tap((product) =>
          this.snackbar.openFromComponent(
            ProductsAddedToCartSnackbarComponent,
            { data: { products: [product] } }
          )
        )
      ),
    { dispatch: false }
  );

  public readonly addProductsToCart$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(addProductsToCart),
        tap(({ products }) =>
          this.snackbar.openFromComponent(
            ProductsAddedToCartSnackbarComponent,
            { data: { products } }
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
        this.cartService
          .checkOut({
            promoCode: payload.promoCode,
            shippingMethod: payload.shippingMethod,
            productIds: products.map((product) => product.uuid),
          })
          .pipe(
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
