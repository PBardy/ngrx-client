import { IBaseCartCheckout } from '@interfaces/models/cart.interface';
import { IProduct } from '@interfaces/models/product.interface';
import { createAction, props } from '@ngrx/store';

export const addProductToCart = createAction('cart/add-one', props<IProduct>());

export const addProductsToCart = createAction(
  'cart/add-many',
  props<{ products: Array<IProduct> }>()
);

export const removeProductFromCart = createAction(
  'cart/remove-one',
  props<IProduct>()
);

export const removeProductsFromCart = createAction(
  'cart/remove-many',
  props<{ products: Array<IProduct> }>()
);

export const checkoutCart = createAction(
  'cart/checkout',
  props<IBaseCartCheckout>()
);

export const checkoutCartSuccess = createAction('cart/checkout/success');

export const removeAllProductsFromCart = createAction('cart/remove-all');
