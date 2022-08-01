import { Component, Input, OnInit } from '@angular/core';
import { IUserLocation } from '@interfaces/models/user-location.interface';

@Component({
  selector: 'app-user-location-products',
  templateUrl: './user-location-products.component.html',
  styleUrls: ['./user-location-products.component.scss'],
})
export class UserLocationProductsComponent implements OnInit {
  @Input() public userLocation: IUserLocation;

  public constructor() {}

  public ngOnInit(): void {}
}
