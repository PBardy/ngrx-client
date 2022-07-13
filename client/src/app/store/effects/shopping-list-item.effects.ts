import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingListItemService } from '@services/shopping-list-item.service';
import {
  addOneShoppingList,
  addProductsToShoppingList,
  addProductToShoppingList,
  removeProductFromShoppingList,
  removeProductsFromShoppingList,
} from '@store/actions/shopping-list.actions';
import { catchError, EMPTY, exhaustMap, from, map, switchMap } from 'rxjs';
import { ApiEffects } from './api.effects';

@Injectable()
export class ShoppingListItemEffects extends ApiEffects {
  public readonly addProduct = createEffect(() =>
    this.actions.pipe(
      ofType(addProductToShoppingList),
      exhaustMap(({ shoppingList, product }) =>
        this.shoppingListItemService.addProduct(shoppingList, product).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly addProducts = createEffect(() =>
    this.actions.pipe(
      ofType(addProductsToShoppingList),
      exhaustMap(({ shoppingList, products }) =>
        this.shoppingListItemService.addProducts(shoppingList, products).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly removeProduct = createEffect(() =>
    this.actions.pipe(
      ofType(removeProductFromShoppingList),
      exhaustMap(({ shoppingList, product }) =>
        this.shoppingListItemService.removeProduct(shoppingList, product).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly removeProducts = createEffect(() =>
    this.actions.pipe(
      ofType(removeProductsFromShoppingList),
      exhaustMap(({ shoppingList, products }) =>
        this.shoppingListItemService
          .removeProducts(shoppingList, products)
          .pipe(
            map((res) => addOneShoppingList(res.data)),
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
    protected readonly shoppingListItemService: ShoppingListItemService
  ) {
    super(snackbar);
  }
}
