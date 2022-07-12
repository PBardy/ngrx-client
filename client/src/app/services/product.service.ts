import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/models/product.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends ModelService<IProduct> {
  protected basePath = 'api/products';
}
