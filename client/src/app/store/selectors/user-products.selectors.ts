import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { userProductsAdapater } from '@store/reducers/user-product.reducer';

const { selectAll } = userProductsAdapater.getSelectors();

export const selectSelf = (state: IAppState) => state.userProducts;

export const selectAllUserProducts = createSelector(selectSelf, selectAll);
