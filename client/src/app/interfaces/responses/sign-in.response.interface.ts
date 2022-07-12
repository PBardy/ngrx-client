import { IUser } from '@interfaces/models/user.interface';

export interface ISignInResponse {
  user: IUser;
  token: string;
}
