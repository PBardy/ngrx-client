import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from '@interfaces/models/location.interface';

@Component({
  selector: 'app-location-actions',
  templateUrl: './location-actions.component.html',
  styleUrls: ['./location-actions.component.scss'],
})
export class LocationActionsComponent implements OnInit {
  @Input() public location: ILocation;

  public constructor() {}

  public ngOnInit(): void {}
}
