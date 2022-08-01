import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { prefetchCategories } from '@store/actions/category.actions';
import { prefetchProducts } from '@store/actions/product.actions';
import { prefetchShippingMethods } from '@store/actions/shipping-methods.actions';
import { prefetchShoppingLists } from '@store/actions/shopping-list.actions';
import { prefetchTags } from '@store/actions/tag.actions';
import {
  prefetchUserLocationAutoSuggestions,
  prefetchUserLocations,
} from '@store/actions/user-locations.actions';
import { prefetchUserProducts } from '@store/actions/user-product.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(prefetchTags());
    this.store.dispatch(prefetchProducts());
    this.store.dispatch(prefetchCategories());
    this.store.dispatch(prefetchShoppingLists());
    this.store.dispatch(prefetchShippingMethods());
    this.store.dispatch(prefetchUserLocations());
    this.store.dispatch(prefetchUserLocationAutoSuggestions());
    this.store.dispatch(prefetchUserProducts());
  }
}
