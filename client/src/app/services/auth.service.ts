import { Injectable } from '@angular/core';
import { UserRole } from '@interfaces/models/user-type.interface';
import { IUser } from '@interfaces/models/user.interface';
import { ISignInRequest } from '@interfaces/requests/sign-in.request.interface';
import { ISignOutRequest } from '@interfaces/requests/sign-out.request.interface';
import { ISignUpRequest } from '@interfaces/requests/sign-up.request.interface';
import { A } from '@interfaces/responses/api.response.interface';
import { ISignInResponse } from '@interfaces/responses/sign-in.response.interface';
import { ISignUpResponse } from '@interfaces/responses/sign-up.response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  protected basePath = '/api/auth';

  protected readonly authRedirects: Record<UserRole, string> = {
    ADMIN: '/user/admin',
    SELLER: '/user/seller',
    CUSTOMER: '/user/customer',
  };

  public signIn(payload: ISignInRequest) {
    return this.http.post<A<ISignInResponse>>(
      `${this.basePath}/sign-in`,
      payload
    );
  }

  public signUp(payload: ISignUpRequest) {
    return this.http.post<A<ISignUpResponse>>(
      `${this.basePath}/sign-up`,
      payload
    );
  }

  public signOut(payload: ISignOutRequest) {
    return this.http.post<A<void>>(`${this.basePath}/sign-out`, payload);
  }

  public refreshSession() {
    return this.http.get<A<ISignInResponse>>(
      `${this.basePath}/refresh-session`
    );
  }

  public getAuthRedirect(user: IUser): string {
    return this.authRedirects[user.userType.tag];
  }

  public resetPassword() {}

  public updatePassword() {}

  public deleteAccount() {}
}
