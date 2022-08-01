import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { ITag } from '@interfaces/models/tag.interface';
import { IUserLocation } from '@interfaces/models/user-location.interface';

@Component({
  selector: 'app-add-user-location-tags',
  templateUrl: './add-user-location-tags.component.html',
  styleUrls: ['./add-user-location-tags.component.scss'],
})
export class AddUserLocationTagsComponent implements OnInit {
  public readonly form = new FormGroup({
    tags: new FormControl<Array<ITag> | null>([]),
    tagsSearch: new FormControl<string | null>(''),
  });

  public constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public readonly data: { userLocation: IUserLocation },
    private readonly ref: MatBottomSheetRef<AddUserLocationTagsComponent>
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public close(): void {
    this.ref.dismiss();
  }

  private initForm(): void {
    this.form.controls.tags.patchValue(this.data.userLocation.tags);
  }
}
