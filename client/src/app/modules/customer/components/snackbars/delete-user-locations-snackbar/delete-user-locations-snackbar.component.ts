import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { IUserLocation } from '@interfaces/models/user-location.interface';

@Component({
  selector: 'app-delete-user-locations-snackbar',
  templateUrl: './delete-user-locations-snackbar.component.html',
  styleUrls: ['./delete-user-locations-snackbar.component.scss'],
})
export class DeleteUserLocationsSnackbarComponent implements OnInit {
  public constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public readonly data: { userLocations: Array<IUserLocation> },
    private readonly ref: MatSnackBarRef<DeleteUserLocationsSnackbarComponent>
  ) {}

  public ngOnInit(): void {}

  public close(): void {
    this.ref.dismiss();
  }

  public undo(): void {
    this.ref.dismissWithAction();
  }
}
