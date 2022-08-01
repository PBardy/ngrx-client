import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '@store/selectors/product.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$ = this.store.select(selectAllProducts);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
