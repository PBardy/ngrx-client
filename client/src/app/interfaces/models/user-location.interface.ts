import { ILocation } from './location.interface';
import { IModel } from './model.interface';
import { IUser } from './user.interface';

export interface IUserLocation extends IModel {
  user: IUser;
  location: ILocation;
}
