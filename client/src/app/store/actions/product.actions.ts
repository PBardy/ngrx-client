import { IProduct } from '@interfaces/models/product.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchProducts = createAction('products/prefetch');

export const setOneProduct = createAction(
  'products/set-one',
  props<{ product: IProduct }>()
);

export const setManyProducts = createAction(
  'products/set-many',
  props<{ products: Array<IProduct> }>()
);

export const searchProducts = createAction(
  'products/search',
  props<{ searchTerm: string }>()
);

export const searchChangedProducts = createAction(
  'products/search/changed',
  props<{ searchTerm: string }>()
);

export const createProduct = createAction(
  'products/create-one',
  props<{ product: Partial<IProduct> }>()
);

export const updateProduct = createAction(
  'products/update-one',
  props<{ product: Partial<IProduct> }>()
);
