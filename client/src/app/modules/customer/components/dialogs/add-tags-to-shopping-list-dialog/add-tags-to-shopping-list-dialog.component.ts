import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { ITag } from '@interfaces/models/tag.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { TagService } from '@services/tag.service';
import { selectAllTags } from '@store/selectors/tag.selectors';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-add-tags-to-shopping-list-dialog',
  templateUrl: './add-tags-to-shopping-list-dialog.component.html',
  styleUrls: ['./add-tags-to-shopping-list-dialog.component.scss'],
})
export class AddTagsToShoppingListDialogComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  private allTags = this.store.select(selectAllTags);

  public tagSearch = '';
  public tagSearchSubject = new Subject<string>();

  public filteredTags: Observable<Array<ITag>>;

  public readonly form = new FormGroup({
    tags: new FormControl<Array<ITag>>([], [Validators.required]),
  });

  public constructor(
    @Inject(MAT_DIALOG_DATA) private shoppingList: IShoppingList,
    private readonly tagsService: TagService,
    private readonly store: Store<IAppState>,
    private readonly dialogRef: MatDialogRef<AddTagsToShoppingListDialogComponent>
  ) {}

  public ngOnInit(): void {
    this.initTagSearch();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public get tags() {
    return this.form.controls.tags.value!;
  }

  private initTagSearch(): void {
    this.tagSearchSubject.pipe(debounceTime(1000), distinctUntilChanged());
  }

  public addTag(event: MatAutocompleteSelectedEvent): void {
    const tag = event.option.value as ITag;
    const tags = [...this.tags, tag];

    this.form.controls.tags.patchValue(tags);
  }

  public removeTag(tag: ITag): void {
    const tags = [...this.tags];
    const index = tags.findIndex((t) => t.uuid === tag.uuid);
    tags.splice(index, 1);

    this.form.controls.tags.patchValue(tags);
  }

  public onSubmit(): void {
    if (this.form.invalid) return;

    this.dialogRef.close();
  }
}
