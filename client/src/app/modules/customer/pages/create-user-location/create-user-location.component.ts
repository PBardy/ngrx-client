import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '@interfaces/models/category.interface';
import { ITag } from '@interfaces/models/tag.interface';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { createUserLocation } from '@store/actions/user-locations.actions';

@Component({
  selector: 'app-create-user-location',
  templateUrl: './create-user-location.component.html',
  styleUrls: ['./create-user-location.component.scss'],
})
export class CreateUserLocationComponent implements OnInit {
  public readonly form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>(''),
    tags: new FormControl<Array<ITag>>([]),
    categories: new FormControl<Array<ICategory>>([]),
  });

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.dispatch(
      createUserLocation({
        userLocation: this.form.value as Partial<IUserLocation>,
      })
    );
  }
}
