import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectFilteredProducts } from '@store/selectors/product.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public readonly products$ = this.store.select(selectFilteredProducts);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
