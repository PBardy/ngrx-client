import { IShippingMethod } from '@interfaces/models/shipping-method.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  addManyShippingMethods,
  addOneShippingMethod,
} from '@store/actions/shipping-methods.actions';

export interface IShippingMethodsState extends EntityState<IShippingMethod> {
  loaded: boolean;
}

export function selectId(a: IShippingMethod): string {
  return a.uuid;
}

export function sortComparer(a: IShippingMethod, b: IShippingMethod): number {
  return a.name.localeCompare(b.name);
}

export const shippingMethodsAdapater: EntityAdapter<IShippingMethod> =
  createEntityAdapter<IShippingMethod>({
    selectId,
    sortComparer,
  });

export const initialState: IShippingMethodsState =
  shippingMethodsAdapater.getInitialState({
    loaded: false,
  });

export const shippingMethodsReducer = createReducer(
  initialState,
  on(addOneShippingMethod, (state, payload) => {
    return shippingMethodsAdapater.addOne(payload, state);
  }),
  on(addManyShippingMethods, (state, payload) => {
    return shippingMethodsAdapater.addMany(payload.shippingMethods, state);
  })
);
