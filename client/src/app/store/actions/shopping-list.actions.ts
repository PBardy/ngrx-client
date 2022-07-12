import { IProduct } from '@interfaces/models/product.interface';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchShoppingLists = createAction('shopping-lists/prefetch');

export const addOneShoppingList = createAction(
  'shopping-lists/add-one',
  props<IShoppingList>()
);

export const addManyShoppingLists = createAction(
  'shopping-lists/add-many',
  props<{ shoppingLists: Array<IShoppingList> }>()
);

export const setOneShoppingList = createAction(
  'shopping-lists/set-one',
  props<IShoppingList>()
);

export const setManyShoppingLists = createAction(
  'shopping-lists/set-many',
  props<{ shoppingLists: Array<IShoppingList> }>()
);

export const deleteOneShoppingList = createAction(
  'shopping-lists/delete-one',
  props<IShoppingList>()
);

export const deleteOneShoppingListSuccess = createAction(
  'shopping-lists/delete-one/success',
  props<IShoppingList>()
);

export const deleteManyShoppingLists = createAction(
  'shopping-lists/set-many',
  props<{ shoppingLists: Array<IShoppingList> }>()
);

export const deleteManyShoppingListsSuccess = createAction(
  'shopping-lists/set-many',
  props<{ shoppingLists: Array<IShoppingList> }>()
);

export const createShoppingList = createAction(
  'shopping-lists/create-one',
  props<Omit<IShoppingList, 'uuid'>>()
);

export const updateShoppingList = createAction(
  'shopping-lists/update-one',
  props<IShoppingList>()
);

export const patchShoppingList = createAction(
  'shopping-lists/patch-one',
  props<Partial<IShoppingList>>()
);

export const deleteShoppingList = createAction(
  'shopping-lists/delete-one',
  props<IShoppingList>()
);

export const deleteShoppingLists = createAction(
  'shopping-lists/delete-many',
  props<{ uuids: Array<string> }>()
);

export const confirmDeleteShoppingList = createAction(
  'shopping-lists/confirm-delete-one',
  props<IShoppingList>()
);

export const confirmDeleteShoppingLists = createAction(
  'shopping-lists/confirm-delete-many',
  props<{ uuids: Array<string> }>()
);

export const duplicateShoppingList = createAction(
  'shopping-lists/duplicate-one',
  props<IShoppingList>()
);

export const duplicateShoppingLists = createAction(
  'shopping-lists/duplicate-many',
  props<{ uuids: Array<string> }>()
);

export const addProductToShoppingList = createAction(
  'shopping-lists/items/add-one',
  props<{ product: IProduct; shoppingList: IShoppingList }>()
);

export const addProductsToShoppingList = createAction(
  'shopping-lists/items/add-many',
  props<{ products: Array<IProduct>; shoppingList: IShoppingList }>()
);

export const removeProductFromShoppingList = createAction(
  'shopping-lists/items/remove-one',
  props<{ product: IProduct; shoppingList: IShoppingList }>()
);

export const removeProductsFromShoppingList = createAction(
  'shopping-lists/items/remove-many',
  props<{ products: Array<IProduct>; shoppingList: IShoppingList }>()
);

export const removeAllProductsFromShoppingList = createAction(
  'shopping-lists/items/remove-all',
  props<{ shoppingList: IShoppingList }>()
);
