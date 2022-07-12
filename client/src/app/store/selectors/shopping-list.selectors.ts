import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { shoppingListsAdapter } from '@store/reducers/shopping-list.reducer';

const { selectAll } = shoppingListsAdapter.getSelectors();

export const selectSelf = (state: IAppState) => state.shoppingLists;

export const selectAllShoppingLists = createSelector(selectSelf, selectAll);

export const selectShoppingListByUuid = (uuid: string) =>
  createSelector(selectAllShoppingLists, (shoppingLists) =>
    shoppingLists.find((shoppingList) => shoppingList.uuid === uuid)
  );
