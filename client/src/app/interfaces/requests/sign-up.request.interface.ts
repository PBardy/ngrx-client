import { UserRole } from '@interfaces/models/user-type.interface';

export interface ISignUpRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: UserRole;
}
