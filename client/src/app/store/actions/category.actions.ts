import { ICategory } from '@interfaces/models/category.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchCategories = createAction('categories/prefetch');

export const addOneCategory = createAction(
  'categories/addOne',
  props<{ category: ICategory }>()
);

export const addManyCategories = createAction(
  'categories/addMany',
  props<{ categories: Array<ICategory> }>()
);

export const setCategory = createAction(
  'categories/setOne',
  props<{ category: ICategory }>()
);

export const setManyCategories = createAction(
  'categories/setMany',
  props<{ categories: Array<ICategory> }>()
);

export const removeOneCategory = createAction(
  'categories/removeOne',
  props<{ category: ICategory }>()
);

export const removeManyCategories = createAction(
  'categories/removeMany',
  props<{ categories: Array<ICategory> }>()
);
