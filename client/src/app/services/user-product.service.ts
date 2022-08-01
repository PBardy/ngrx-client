import { Injectable } from '@angular/core';
import { IUserProduct } from '@interfaces/models/user-product.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class UserProductService extends ModelService<IUserProduct> {
  protected basePath: string = 'api/user/products';
}
