import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICartCheckout } from '@interfaces/models/cart.interface';
import { IProduct } from '@interfaces/models/product.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { addProductsToCart } from '@store/actions/cart.actions';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService extends ApiService {
  protected basePath = '/api/cart';

  public constructor(
    private readonly store: Store<IAppState>,
    protected override readonly http: HttpClient
  ) {
    super(http);
  }

  public checkOut(payload: ICartCheckout) {
    return this.http.post(`${this.basePath}/checkout`, payload);
  }

  public addSelectionToCart(selection: SelectionModel<IProduct>): void {
    this.store.dispatch(addProductsToCart({ products: selection.selected }));
  }
}
