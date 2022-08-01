import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILocation } from '@interfaces/models/location.interface';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { A } from '@interfaces/responses/api.response.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import {
  createManyUserLocationsFromLocations,
  deleteUserLocations,
} from '@store/actions/user-locations.actions';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class UserLocationService extends ModelService<IUserLocation> {
  protected basePath = 'api/user/locations';

  public constructor(
    protected override http: HttpClient,
    private readonly store: Store<IAppState>
  ) {
    super(http);
  }

  public addTags(userLocationId: string, tagIds: Array<string>) {
    return this.http.post<A<IUserLocation>>(
      `${this.basePath}/user/locations/${userLocationId}/tags`,
      { tagIds }
    );
  }

  public addFromSelection(selection: SelectionModel<ILocation>) {
    if (selection.isEmpty()) return;
    const locationIds = selection.selected.map((value) => value.uuid);
    this.store.dispatch(createManyUserLocationsFromLocations({ locationIds }));
  }

  public deleteFromSelection(selection: SelectionModel<IUserLocation>) {
    if (selection.isEmpty()) return;
    const userLocationIds = selection.selected.map((value) => value.uuid);
    this.store.dispatch(deleteUserLocations({ userLocationIds }));
  }

  public getAutoSuggestions() {
    return this.http.get<A<Array<ILocation>>>(
      `${this.basePath}/auto-suggestions`
    );
  }

  public createManyFromLocations(locationIds: Array<string>) {
    return this.http.post<A<Array<IUserLocation>>>(
      `${this.basePath}/auto-suggestions`,
      { locationIds }
    );
  }
}
