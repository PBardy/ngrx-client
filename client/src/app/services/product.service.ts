import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  IProduct,
  ProductAvailability,
} from '@interfaces/models/product.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends ModelService<IProduct> {
  protected basePath = 'api/products';

  public constructor(
    protected override readonly http: HttpClient,
    private readonly router: Router
  ) {
    super(http);
  }

  public viewProduct({ uuid }: IProduct): void {
    this.router.navigateByUrl('/user/customer/products/' + uuid);
  }

  public isAvailable(product: IProduct) {
    return product.availability === ProductAvailability.AVAILABLE;
  }

  public isUnavailable(product: IProduct) {
    return product.availability === ProductAvailability.UNAVAILABLE;
  }

  public canPurchaseProduct(product: IProduct): boolean {
    return this.isAvailable(product);
  }
}
