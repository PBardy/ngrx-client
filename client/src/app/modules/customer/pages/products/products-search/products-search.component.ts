import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '@interfaces/models/product.interface';
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
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent implements OnInit, OnDestroy {
  @Input() public products: Array<IProduct> | null = [];

  private readonly subscriptions = new Subscription();

  public searchTerm = '';
  public searchTermSub = new Subject<string>();

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.initSearch();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initSearch(): void {
    this.subscriptions.add(
      this.searchTermSub.subscribe((searchTerm) => {
        this.store.dispatch(searchChangedProducts({ searchTerm }));
      })
    );
  }
}
