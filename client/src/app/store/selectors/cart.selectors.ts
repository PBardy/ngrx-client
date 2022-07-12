import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { cartAdapater } from '@store/reducers/cart.reducer';

const { selectAll } = cartAdapater.getSelectors();

export const selectSelf = (state: IAppState) => state.cart;

export const selectCart = createSelector(selectSelf, selectAll);

export const selectCartCost = createSelector(selectCart, (products) =>
  products.map((p) => p.price).reduce((a, b) => a + b, 0)
);

export const selectTotalCartCost = (...extras: Array<number>) =>
  createSelector(selectCartCost, (baseCost) =>
    extras.reduce((a, b) => a + b, baseCost)
  );
