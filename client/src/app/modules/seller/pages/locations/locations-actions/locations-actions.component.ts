import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILocation } from '@interfaces/models/location.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-locations-actions',
  templateUrl: './locations-actions.component.html',
  styleUrls: ['./locations-actions.component.scss'],
})
export class LocationsActionsComponent implements OnInit {
  @Input() public locations: Array<ILocation> = [];

  public constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>
  ) {}

  public ngOnInit(): void {}

  public addLocation(): void {
    this.router.navigate(['/user/seller/locations/create']);
  }
}
