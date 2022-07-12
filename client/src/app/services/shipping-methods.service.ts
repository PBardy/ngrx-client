import { Injectable } from '@angular/core';
import { IShippingMethod } from '@interfaces/models/shipping-method.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ShippingMethodsService extends ModelService<IShippingMethod> {
  protected basePath = 'api/shipping-methods';
}
