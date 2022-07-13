import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingListService } from '@services/shopping-list.service';
import {
  addManyShoppingLists,
  addOneShoppingList,
  addProductsToShoppingList,
  addProductToShoppingList,
  createShoppingList,
  deleteManyShoppingListsSuccess,
  deleteOneShoppingListSuccess,
  deleteShoppingList,
  deleteShoppingLists,
  duplicateShoppingList,
  duplicateShoppingLists,
  patchShoppingList,
  prefetchShoppingLists,
  updateShoppingList,
} from '@store/actions/shopping-list.actions';
import { catchError, EMPTY, exhaustMap, from, map, switchMap } from 'rxjs';
import { ApiEffects } from './api.effects';

@Injectable()
export class ShoppingListEffects extends ApiEffects {
  public readonly prefetch = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchShoppingLists),
      exhaustMap(() =>
        this.shoppingListService.getAll().pipe(
          map((res) => addManyShoppingLists({ shoppingLists: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  public readonly createOne = createEffect(() =>
    this.actions.pipe(
      ofType(createShoppingList),
      exhaustMap(({ type, ...payload }) =>
        this.shoppingListService.createOne(payload).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly patchOne = createEffect(() =>
    this.actions.pipe(
      ofType(patchShoppingList),
      exhaustMap(({ type, uuid, ...payload }) =>
        this.shoppingListService.patchOne(uuid!, payload).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly updateOne = createEffect(() =>
    this.actions.pipe(
      ofType(updateShoppingList),
      exhaustMap(({ type, uuid, ...payload }) =>
        this.shoppingListService.updateOne(uuid, payload).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly deleteOne = createEffect(() =>
    this.actions.pipe(
      ofType(deleteShoppingList),
      exhaustMap(({ uuid }) =>
        this.shoppingListService.deleteOne(uuid).pipe(
          map((res) => deleteOneShoppingListSuccess(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly deleteMany = createEffect(() =>
    this.actions.pipe(
      ofType(deleteShoppingLists),
      exhaustMap(({ uuids }) =>
        this.shoppingListService.deleteMany(uuids).pipe(
          map((res) =>
            deleteManyShoppingListsSuccess({ shoppingLists: res.data })
          ),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly duplicateOne = createEffect(() =>
    this.actions.pipe(
      ofType(duplicateShoppingList),
      exhaustMap(({ uuid }) =>
        this.shoppingListService.duplicateOne(uuid).pipe(
          map((res) => addOneShoppingList(res.data)),
          catchError((err: HttpErrorResponse) =>
            from(this.showError(err)).pipe(switchMap(() => EMPTY))
          )
        )
      )
    )
  );

  public readonly duplicateMany = createEffect(() =>
    this.actions.pipe(
      ofType(duplicateShoppingLists),
      exhaustMap(({ uuids }) =>
        this.shoppingListService.duplicateMany(uuids).pipe(
          map((res) => addManyShoppingLists({ shoppingLists: res.data })),
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
    protected readonly shoppingListService: ShoppingListService
  ) {
    super(snackbar);
  }
}
