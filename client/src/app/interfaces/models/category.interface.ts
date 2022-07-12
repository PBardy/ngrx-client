import { IModel } from './model.interface';

export interface IBaseCategory extends IModel {
  name: string;
}

export interface ICategory extends IBaseCategory {}
