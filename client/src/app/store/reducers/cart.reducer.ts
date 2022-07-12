import { IProduct } from '@interfaces/models/product.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  addProductsToCart,
  addProductToCart,
  checkoutCartSuccess,
  removeAllProductsFromCart,
  removeProductFromCart,
  removeProductsFromCart,
} from '@store/actions/cart.actions';

export interface ICartState extends EntityState<IProduct> {}

export function selectId(a: IProduct): string {
  return a.uuid;
}

export function sortComparer(a: IProduct, b: IProduct): number {
  return a.name.localeCompare(b.name);
}

export const cartAdapater: EntityAdapter<IProduct> =
  createEntityAdapter<IProduct>({
    selectId,
    sortComparer,
  });

export const initialState: ICartState = cartAdapater.getInitialState({});

export const cartReducer = createReducer(
  initialState,
  on(addProductToCart, (state, payload) => {
    return cartAdapater.addOne(payload, state);
  }),
  on(addProductsToCart, (state, payload) => {
    return cartAdapater.addMany(payload.products, state);
  }),
  on(removeProductFromCart, (state, payload) => {
    return cartAdapater.removeOne(payload.uuid, state);
  }),
  on(removeProductsFromCart, (state, payload) => {
    return cartAdapater.removeMany(
      payload.products.map((product) => product.uuid),
      state
    );
  }),
  on(removeAllProductsFromCart, (state) => {
    return cartAdapater.removeAll(state);
  }),
  on(checkoutCartSuccess, (state) => {
    return cartAdapater.removeAll(state);
  })
);
