import { Component, Input, OnInit } from '@angular/core';
import { IUserProduct } from '@interfaces/models/user-product.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-products-filters',
  templateUrl: './user-products-filters.component.html',
  styleUrls: ['./user-products-filters.component.scss'],
})
export class UserProductsFiltersComponent implements OnInit {
  @Input() public userProducts: Array<IUserProduct> = [];

  public searchTerm = '';
  public searchTermSub = new Subject<string>();

  public constructor() {}

  public ngOnInit(): void {}
}
