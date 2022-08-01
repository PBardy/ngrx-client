import { IUserProduct } from '@interfaces/models/user-product.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchUserProducts = createAction('user/products/prefetch');

export const addOneUserProduct = createAction(
  'user/porducts/add-one',
  props<{ userProduct: IUserProduct }>()
);

export const addManyUserProducts = createAction(
  'user/porducts/add-many',
  props<{ userProducts: Array<IUserProduct> }>()
);
