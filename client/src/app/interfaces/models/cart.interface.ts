export interface IBaseCartCheckout {
  promoCode: string | null;
  shippingMethod: string;
}

export interface ICartCheckout extends IBaseCartCheckout {
  productIds: Array<string>;
}
