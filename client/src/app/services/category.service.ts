import { Injectable } from '@angular/core';
import { IBaseCategory } from '@interfaces/models/category.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends ModelService<IBaseCategory> {
  protected basePath = 'api/categories';
}
