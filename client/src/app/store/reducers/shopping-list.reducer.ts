import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  addManyShoppingLists,
  addOneShoppingList,
  deleteManyShoppingListsSuccess,
  deleteOneShoppingListSuccess,
  setManyShoppingLists,
  setOneShoppingList,
} from '@store/actions/shopping-list.actions';

export interface IShoppingListsState extends EntityState<IShoppingList> {
  loaded: boolean;
}

export function selectId(a: IShoppingList): string {
  return a.uuid;
}

export function sortComparer(a: IShoppingList, b: IShoppingList): number {
  return a.name.localeCompare(b.name);
}

export const shoppingListsAdapter: EntityAdapter<IShoppingList> =
  createEntityAdapter<IShoppingList>({
    selectId,
    sortComparer,
  });

export const initialState: IShoppingListsState =
  shoppingListsAdapter.getInitialState({
    loaded: false,
  });

export const shoppingListsReducer = createReducer(
  initialState,
  on(addOneShoppingList, (state, payload) => {
    return shoppingListsAdapter.addOne(payload, state);
  }),
  on(addManyShoppingLists, (state, action) => {
    return shoppingListsAdapter.addMany(action.shoppingLists, state);
  }),
  on(setOneShoppingList, (state, payload) => {
    return shoppingListsAdapter.setOne(payload, state);
  }),
  on(setManyShoppingLists, (state, action) => {
    return shoppingListsAdapter.setMany(action.shoppingLists, state);
  }),
  on(deleteOneShoppingListSuccess, (state, payload) => {
    return shoppingListsAdapter.removeOne(payload.uuid, state);
  }),
  on(deleteManyShoppingListsSuccess, (state, action) => {
    return shoppingListsAdapter.removeMany(
      action.shoppingLists.map((shoppingList) => shoppingList.uuid),
      state
    );
  })
);
