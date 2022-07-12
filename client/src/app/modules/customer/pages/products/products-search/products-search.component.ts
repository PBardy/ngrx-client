import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import {
  searchChangedProducts,
  searchProducts,
} from '@store/actions/product.actions';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public readonly form = new FormGroup({
    searchTerm: new FormControl(''),
    searchFilter: new FormControl(''),
  });

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initForm(): void {
    this.subscriptions.add(
      this.form.controls.searchTerm.valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          filter((value) => Boolean(value)),
          map((value) => value as string)
        )
        .subscribe((searchTerm) => {
          this.store.dispatch(searchChangedProducts({ searchTerm }));
        })
    );
  }

  public onSubmit(): void {
    if (this.form.invalid) return;
    if (this.form.value.searchTerm == null) return;
    this.store.dispatch(
      searchProducts({ searchTerm: this.form.value.searchTerm })
    );
  }
}
