import { IUserProduct } from '@interfaces/models/user-product.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  addManyUserProducts,
  addOneUserProduct,
} from '@store/actions/user-product.actions';

export interface IUserProductsState extends EntityState<IUserProduct> {}

export function selectId(a: IUserProduct): string {
  return a.uuid;
}

export function sortComparer(a: IUserProduct, b: IUserProduct): number {
  return a.product.name.localeCompare(b.product.name);
}

export const userProductsAdapater: EntityAdapter<IUserProduct> =
  createEntityAdapter<IUserProduct>({
    selectId,
    sortComparer,
  });

export const initialState: IUserProductsState =
  userProductsAdapater.getInitialState({});

export const userProductsReducer = createReducer(
  initialState,
  on(addOneUserProduct, (state, action) => {
    return userProductsAdapater.addOne(action.userProduct, state);
  }),
  on(addManyUserProducts, (state, action) => {
    return userProductsAdapater.addMany(action.userProducts, state);
  })
);
