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

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectProductsSearch,
  (products, productsSearch) =>
    products.filter((product) => {
      const a = productsSearch.toLowerCase();
      const b = product.name.toLowerCase();

      return a.includes(b) || b.includes(a);
    })
);

export const selectProductById = (id: string) =>
  createSelector(selectAllProducts, (products) =>
    products.find((product) => product.uuid === id)
  );
