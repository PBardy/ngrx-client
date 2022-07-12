import { Injectable } from '@angular/core';
import { IUserType } from '@interfaces/models/user-type.interface';
import { IBaseUser } from '@interfaces/models/user.interface';
import { A } from '@interfaces/responses/api.response.interface';
import { Observable } from 'rxjs';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ModelService<IBaseUser> {
  protected basePath = '/api/users';

  public getTypes(): Observable<A<Array<IUserType>>> {
    return this.http.get<A<Array<IUserType>>>(`${this.basePath}/types`);
  }
}
