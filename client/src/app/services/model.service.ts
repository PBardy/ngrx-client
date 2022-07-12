import { Injectable } from '@angular/core';
import { IModel } from '@interfaces/models/model.interface';
import { A } from '@interfaces/responses/api.response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export abstract class ModelService<T extends IModel> extends ApiService {
  protected abstract basePath: string;

  public getAll() {
    return this.http.get<A<Array<T>>>(`/${this.basePath}`);
  }

  public getOne(uuid: string) {
    return this.http.get<A<T>>(`/${this.basePath}/${uuid}`);
  }

  public createOne(payload: Omit<T, 'uuid'>) {
    return this.http.post<A<T>>(`/${this.basePath}`, payload);
  }

  public updateOne(uuid: string, payload: Omit<T, 'uuid'>) {
    return this.http.put<A<T>>(`/${this.basePath}/${uuid}`, payload);
  }

  public patchOne(uuid: string, payload: Partial<T>) {
    return this.http.patch<A<T>>(`/${this.basePath}/${uuid}`, payload);
  }

  public deleteOne(uuid: string) {
    return this.http.delete<A<T>>(`/${this.basePath}/${uuid}`);
  }

  public deleteMany(uuids: Array<string>) {
    return this.http.post<A<Array<T>>>(`/${this.basePath}/delete`, { uuids });
  }

  public duplicateOne(uuid: string) {
    return this.http.post<A<T>>(`/${this.basePath}/${uuid}/copy`, {});
  }

  public duplicateMany(uuids: Array<string>) {
    return this.http.post<A<Array<T>>>(`/${this.basePath}/copy`, { uuids });
  }
}
