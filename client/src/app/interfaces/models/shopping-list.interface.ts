import { IModel } from './model.interface';
import { IProduct } from './product.interface';
import { ITag } from './tag.interface';

export interface IShoppingList extends IModel {
  name: string;
  tags: Array<ITag>;
  items: Array<IProduct>;
}
