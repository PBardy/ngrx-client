import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '@interfaces/models/product.interface';

@Component({
  selector: 'app-products-actions',
  templateUrl: './products-actions.component.html',
  styleUrls: ['./products-actions.component.scss'],
})
export class ProductsActionsComponent implements OnInit {
  @Input() public products: Array<IProduct> = [];

  public constructor(private readonly router: Router) {}

  public ngOnInit(): void {}

  public addProduct(): void {
    this.router.navigate(['/user/seller/products/create']);
  }
}
