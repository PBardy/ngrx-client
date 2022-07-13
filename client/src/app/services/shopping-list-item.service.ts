import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/models/product.interface';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { A } from '@interfaces/responses/api.response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListItemService extends ApiService {
  protected basePath = 'api/user/shopping-lists';

  public constructor(protected override readonly http: HttpClient) {
    super(http);
  }

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

  public removeProduct({ uuid }: IShoppingList, product: IProduct) {
    return this.http.post<A<IShoppingList>>(
      `${this.basePath}/${uuid}/items/remove/${product.uuid}`,
      {}
    );
  }

  public removeProducts({ uuid }: IShoppingList, products: Array<IProduct>) {
    return this.http.post<A<IShoppingList>>(
      `${this.basePath}/${uuid}/items/remove`,
      products
    );
  }
}
