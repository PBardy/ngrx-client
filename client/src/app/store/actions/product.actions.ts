import { IProduct } from '@interfaces/models/product.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchProducts = createAction('products/prefetch');

export const setManyProducts = createAction(
  'products/setMany',
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
