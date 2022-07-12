import { IUser } from '@interfaces/models/user.interface';

export interface ISignUpResponse {
  user: IUser;
  token: string;
}
