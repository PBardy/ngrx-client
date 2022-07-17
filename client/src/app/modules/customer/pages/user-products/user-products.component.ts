import { Component, OnInit } from '@angular/core';
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

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
