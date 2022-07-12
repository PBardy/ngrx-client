import { IModel } from './model.interface';
import { IUserType } from './user-type.interface';

export interface IBaseUser extends IModel {
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUser extends IBaseUser {
  userType: IUserType;
}
