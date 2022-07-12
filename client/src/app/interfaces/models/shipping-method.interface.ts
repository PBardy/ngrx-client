import { IModel } from './model.interface';

export interface IShippingMethod extends IModel {
  name: string;
  slug: string;
  price: number;
}
