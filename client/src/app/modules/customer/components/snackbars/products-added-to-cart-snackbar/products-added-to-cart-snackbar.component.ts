import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IProduct } from '@interfaces/models/product.interface';

@Component({
  selector: 'app-products-added-to-cart-snackbar',
  templateUrl: './products-added-to-cart-snackbar.component.html',
  styleUrls: ['./products-added-to-cart-snackbar.component.scss'],
})
export class ProductsAddedToCartSnackbarComponent implements OnInit {
  public constructor(
    private readonly router: Router,
    private readonly ref: MatSnackBarRef<ProductsAddedToCartSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA)
    public readonly data: { products: Array<IProduct> }
  ) {}

  public ngOnInit(): void {}

  public view(): void {
    this.ref.dismissWithAction();
    this.router.navigate(['/user/customer/cart']);
  }

  public close(): void {
    this.ref.dismiss();
  }
}
