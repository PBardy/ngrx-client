import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { createShoppingList } from '@store/actions/shopping-list.actions';

@Component({
  selector: 'app-add-shopping-list-dialog',
  templateUrl: './add-shopping-list-dialog.component.html',
  styleUrls: ['./add-shopping-list-dialog.component.scss'],
})
export class AddShoppingListDialogComponent {
  public readonly form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tags: new FormArray([]),
  });

  public constructor(
    private readonly store: Store<IAppState>,
    private readonly dialogRef: MatDialogRef<AddShoppingListDialogComponent>
  ) {}

  public onCreate(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const value = this.form.value as Omit<IShoppingList, 'uuid'>;
      this.store.dispatch(createShoppingList(value));
      this.dialogRef.close();
    }
  }
}
