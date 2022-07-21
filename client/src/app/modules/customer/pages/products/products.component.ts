import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import {
  selectAllProducts,
  selectProductsSearch,
} from '@store/selectors/product.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public view = 'table';

  public readonly products$ = this.store.select(selectAllProducts);
  public readonly productsSearch$ = this.store.select(selectProductsSearch);

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit(): void {}
}
