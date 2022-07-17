import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITag } from '@interfaces/models/tag.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { createShoppingList } from '@store/actions/shopping-list.actions';

@Component({
  selector: 'app-create-shopping-list',
  templateUrl: './create-shopping-list.component.html',
  styleUrls: ['./create-shopping-list.component.scss'],
})
export class CreateShoppingListComponent implements OnInit {
  public readonly form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    tags: new FormControl<Array<ITag>>([]),
  });

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (this.form.invalid) return;

    this.store.dispatch(
      createShoppingList({
        name: this.form.value.name!,
        tags: this.form.value.tags!,
      })
    );
  }
}
