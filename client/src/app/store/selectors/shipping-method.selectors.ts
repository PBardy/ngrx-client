import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { shippingMethodsAdapater } from '@store/reducers/shipping-methods.reducer';

const { selectAll } = shippingMethodsAdapater.getSelectors();

export const selectSelf = (state: IAppState) => state.shippingMethods;

export const selectAllShippingMethods = createSelector(selectSelf, selectAll);
