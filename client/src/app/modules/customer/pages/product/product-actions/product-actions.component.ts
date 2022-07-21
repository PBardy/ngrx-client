import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/models/product.interface';

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss'],
})
export class ProductActionsComponent implements OnInit {
  @Input() public product: IProduct;

  constructor() {}

  ngOnInit(): void {}
}
