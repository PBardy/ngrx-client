import { IModel } from './model.interface';

export interface IBaseLocation extends IModel {
  name: string;
  description: string | null;
}

export interface ILocation extends IBaseLocation {}
