import { Injectable } from '@angular/core';
import { IBaseTag } from '@interfaces/models/tag.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class TagService extends ModelService<IBaseTag> {
  protected basePath = 'api/tags';
}
