import { IProduct } from '@interfaces/models/product.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface IUserProductsState extends EntityState<IProduct> {}

export function selectId(a: IProduct): string {
  return a.uuid;
}

export function sortComparer(a: IProduct, b: IProduct): number {
  return a.name.localeCompare(b.name);
}

export const userProductsAdapater: EntityAdapter<IProduct> =
  createEntityAdapter<IProduct>({
    selectId,
    sortComparer,
  });

export const initialState: IUserProductsState =
  userProductsAdapater.getInitialState({});

export const userProductsReducer = createReducer(initialState);
