import { IShippingMethod } from '@interfaces/models/shipping-method.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchShippingMethods = createAction(
  'shipping-methods/prefetch'
);

export const addOneShippingMethod = createAction(
  'shipping-methods/add-one',
  props<IShippingMethod>()
);

export const addManyShippingMethods = createAction(
  'shipping-methods/add-many',
  props<{ shippingMethods: Array<IShippingMethod> }>()
);
