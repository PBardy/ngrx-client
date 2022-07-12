import { IModel } from './model.interface';
import { IProduct } from './product.interface';

export interface IShoppingListItem extends IModel {
  product: IProduct;
}
