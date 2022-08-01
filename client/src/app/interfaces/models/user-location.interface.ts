import { ILocation } from './location.interface';
import { IModel } from './model.interface';
import { ITag } from './tag.interface';
import { IUser } from './user.interface';

export interface IUserLocation extends IModel {
  user: IUser;
  location: ILocation;
  tags: Array<ITag>;
}
