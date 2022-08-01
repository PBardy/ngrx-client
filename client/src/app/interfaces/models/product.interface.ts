import { ICategory } from './category.interface';
import { IModel } from './model.interface';
import { ITag } from './tag.interface';

export enum ProductAvailability {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

export interface IProductProperty extends IModel {}

export interface IBaseProduct extends IModel {
  code: string;
  slug: string;
  name: string;
  image: string;
  description?: string;
  price: number;
  availability: ProductAvailability;
}

export interface IProduct extends IBaseProduct {
  tags?: ITag[];
  categories?: ICategory[];
  properties?: IProductProperty;
}
