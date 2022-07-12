import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { productsAdapter } from '@store/reducers/product.reducer';

const { selectAll } = productsAdapter.getSelectors();

export const selectSelf = (state: IAppState) => state.products;

export const selectAllProducts = createSelector(selectSelf, selectAll);

export const selectProductsSearch = createSelector(
  selectSelf,
  (state) => state.searchTerm
);
