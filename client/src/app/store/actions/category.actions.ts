import { ICategory } from '@interfaces/models/category.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchCategories = createAction('categories/prefetch');

export const setManyCategories = createAction(
  'categories/setMany',
  props<{ categories: Array<ICategory> }>()
);
