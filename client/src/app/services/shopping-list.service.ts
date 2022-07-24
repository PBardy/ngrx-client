import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import {
  deleteShoppingLists,
  duplicateShoppingLists,
} from '@store/actions/shopping-list.actions';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService extends ModelService<IShoppingList> {
  protected basePath = 'api/user/shopping-lists';

  public constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>,
    protected override readonly http: HttpClient
  ) {
    super(http);
  }

  public viewShoppingList({ uuid }: IShoppingList): void {
    this.router.navigateByUrl('/user/customer/my/shopping-lists/' + uuid);
  }

  public duplicateFromSelection(
    selection: SelectionModel<IShoppingList>
  ): void {
    if (selection.isEmpty()) return;
    const uuids = selection.selected.map((selection) => selection.uuid);
    this.store.dispatch(duplicateShoppingLists({ uuids }));
  }

  public deleteFromSelection(selection: SelectionModel<IShoppingList>): void {
    if (selection.isEmpty()) return;
    const uuids = selection.selected.map((selection) => selection.uuid);
    selection.clear();
    this.store.dispatch(deleteShoppingLists({ uuids }));
  }
}
