import { IModel } from './model.interface';

export interface IBaseTag extends IModel {
  name: string;
}

export interface ITag extends IBaseTag {}
