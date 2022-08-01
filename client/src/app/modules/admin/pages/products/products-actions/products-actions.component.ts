import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/models/product.interface';

@Component({
  selector: 'app-products-actions',
  templateUrl: './products-actions.component.html',
  styleUrls: ['./products-actions.component.scss'],
})
export class ProductsActionsComponent implements OnInit {
  @Input() public products: Array<IProduct> = [];
  @Input() public selection: SelectionModel<IProduct>;

  public constructor() {}

  public ngOnInit(): void {}
}
