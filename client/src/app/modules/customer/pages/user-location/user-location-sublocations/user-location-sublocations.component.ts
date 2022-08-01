import { Component, Input, OnInit } from '@angular/core';
import { IUserLocation } from '@interfaces/models/user-location.interface';

@Component({
  selector: 'app-user-location-sublocations',
  templateUrl: './user-location-sublocations.component.html',
  styleUrls: ['./user-location-sublocations.component.scss'],
})
export class UserLocationSublocationsComponent implements OnInit {
  @Input() public userLocation: IUserLocation;

  public constructor() {}

  public ngOnInit(): void {}
}
