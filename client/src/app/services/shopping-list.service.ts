import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/models/product.interface';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { A } from '@interfaces/responses/api.response.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService extends ModelService<IShoppingList> {
  protected basePath = 'api/user/shopping-lists';

  public addProduct({ uuid }: IShoppingList, product: IProduct) {
    return this.http.post<A<IShoppingList>>(
      `${this.basePath}/${uuid}/items/add/${product.uuid}`,
      {}
    );
  }

  public addProducts({ uuid }: IShoppingList, products: Array<IProduct>) {
    return this.http.post<A<IShoppingList>>(
      `${this.basePath}/${uuid}/items/add`,
      products
    );
  }
}
