import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/models/product.interface';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-products-actions',
  templateUrl: './products-actions.component.html',
  styleUrls: ['./products-actions.component.scss'],
})
export class ProductsActionsComponent implements OnInit {
  @Input() public selection = new SelectionModel<IProduct>(true, []);

  public constructor(public readonly cartService: CartService) {}

  public ngOnInit(): void {}
}
