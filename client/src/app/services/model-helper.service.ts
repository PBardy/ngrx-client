import { Injectable } from '@angular/core';
import { IModel } from '@interfaces/models/model.interface';

@Injectable({
  providedIn: 'root',
})
export class ModelHelperService {
  public trackByUuid(index: number, model: IModel) {
    return model.uuid;
  }
}
