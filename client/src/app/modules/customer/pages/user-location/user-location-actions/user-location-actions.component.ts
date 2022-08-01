import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { AddUserLocationTagsComponent } from '@modules/customer/components/bottom-sheets/add-user-location-tags/add-user-location-tags.component';

@Component({
  selector: 'app-user-location-actions',
  templateUrl: './user-location-actions.component.html',
  styleUrls: ['./user-location-actions.component.scss'],
})
export class UserLocationActionsComponent implements OnInit {
  @Input() public userLocation: IUserLocation;

  public constructor(private readonly bottomSheet: MatBottomSheet) {}

  public ngOnInit(): void {}

  public addTags(): void {
    this.bottomSheet.open(AddUserLocationTagsComponent, {
      data: { userLocation: this.userLocation },
    });
  }

  public addUserSubLocation(): void {}

  public deleteUserLocation(): void {}
}
