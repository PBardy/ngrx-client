import { Injectable } from '@angular/core';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService extends ModelService<IShoppingList> {
  protected basePath = 'api/user/shopping-lists';
}
