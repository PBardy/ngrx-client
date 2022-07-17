import { Component, Input, OnInit } from '@angular/core';
import type { IProduct } from '@interfaces/models/product.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { addProductToCart } from '@store/actions/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() public product: IProduct;

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public addToCart(): void {
    this.store.dispatch(addProductToCart(this.product));
  }

  public get productLink(): string {
    return `/user/customer/products/${this.product.uuid}`;
  }
}
