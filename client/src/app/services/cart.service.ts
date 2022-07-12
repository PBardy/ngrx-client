import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICartCheckout } from '@interfaces/models/cart.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService extends ApiService {
  protected basePath = '/api/cart';

  public constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  public checkOut(payload: ICartCheckout) {
    return this.http.post(`${this.basePath}/checkout`, payload);
  }
}
