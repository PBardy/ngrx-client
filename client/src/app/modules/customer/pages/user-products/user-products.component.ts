import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { IUserProduct } from '@interfaces/models/user-product.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectAllUserProducts } from '@store/selectors/user-products.selectors';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss'],
})
export class UserProductsComponent implements OnInit {
  public userProducts$ = this.store.select(selectAllUserProducts);
  public selection = new SelectionModel<IUserProduct>(true, []);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
