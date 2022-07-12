import { Injectable } from '@angular/core';
import { IBaseLocation } from '@interfaces/models/location.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends ModelService<IBaseLocation> {
  protected basePath = 'location';
}
