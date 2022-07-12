import { IModel } from './model.interface';

export enum UserRole {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export interface IBaseUserType extends IModel {
  tag: UserRole;
  icon: string;
  name: string;
  description: string;
}

export interface IUserType extends IBaseUserType {}
