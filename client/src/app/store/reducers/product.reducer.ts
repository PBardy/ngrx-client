import { IProduct } from '@interfaces/models/product.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  searchChangedProducts,
  searchProducts,
  setManyProducts,
} from '@store/actions/product.actions';

export interface IProductsState extends EntityState<IProduct> {
  loaded: boolean;
  searchTerm: string;
  searchHistory: Array<string>;
}

export function selectId(a: IProduct): string {
  return a.uuid;
}

export function sortComparer(a: IProduct, b: IProduct): number {
  return a.name.localeCompare(b.name);
}

export const productsAdapter: EntityAdapter<IProduct> =
  createEntityAdapter<IProduct>({
    selectId,
    sortComparer,
  });

export const initialState: IProductsState = productsAdapter.getInitialState({
  loaded: false,
  searchTerm: '',
  searchHistory: [],
});

export const productsReducer = createReducer(
  initialState,
  on(setManyProducts, (state, action) => {
    return productsAdapter.setMany(action.products, state);
  }),
  on(searchProducts, (state, action) => {
    return {
      ...state,
      searchTerm: action.searchTerm,
      searchHistory: [...state.searchHistory, action.searchTerm],
    };
  }),
  on(searchChangedProducts, (state, action) => {
    return {
      ...state,
      searchTerm: action.searchTerm,
    };
  })
);
