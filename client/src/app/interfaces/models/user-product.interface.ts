import { IModel } from './model.interface';
import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface IUserProduct extends IModel {
  user: IUser;
  product: IProduct;
}
