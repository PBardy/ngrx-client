import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IBaseLocation } from '@interfaces/models/location.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends ModelService<IBaseLocation> {
  protected basePath = 'location';

  public constructor(
    private readonly router: Router,
    protected override readonly http: HttpClient
  ) {
    super(http);
  }

  public viewLocation() {}
}
