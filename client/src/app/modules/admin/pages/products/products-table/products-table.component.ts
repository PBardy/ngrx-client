import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from '@interfaces/models/product.interface';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit, OnChanges {
  @Input() public products: Array<IProduct> = [];
  @Input() public selection: SelectionModel<IProduct>;

  public dataSource = new MatTableDataSource<IProduct>([]);

  public constructor() {}

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.dataSource = new MatTableDataSource<IProduct>(this.products);
    }
  }
}
