import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { UserLocationService } from '@services/user-location.service';

@Component({
  selector: 'app-user-locations-actions',
  templateUrl: './user-locations-actions.component.html',
  styleUrls: ['./user-locations-actions.component.scss'],
})
export class UserLocationsActionsComponent implements OnInit {
  @Input() public selection: SelectionModel<IUserLocation>;

  public constructor(
    public readonly userLocationService: UserLocationService
  ) {}

  public ngOnInit(): void {}
}
