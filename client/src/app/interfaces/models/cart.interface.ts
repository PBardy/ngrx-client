import { IProduct } from './product.interface';
import { IShippingMethod } from './shipping-method.interface';

export interface ICartCheckout {
  promoCode: string | null;
  shippingMethod: IShippingMethod;
  products: Array<IProduct>;
}
