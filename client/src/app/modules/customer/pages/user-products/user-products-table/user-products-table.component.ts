import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUserProduct } from '@interfaces/models/user-product.interface';
import { ModelHelperService } from '@services/model-helper.service';

@Component({
  selector: 'app-user-products-table',
  templateUrl: './user-products-table.component.html',
  styleUrls: ['./user-products-table.component.scss'],
})
export class UserProductsTableComponent implements OnInit, OnChanges {
  @Input() public userProducts: Array<IUserProduct> = [];
  @Input() public selection = new SelectionModel<IUserProduct>(true, []);

  public readonly columns = [
    'select',
    'id',
    'name',
    'price',
    'status',
    'options',
  ];

  public readonly pageSizes = [5, 10, 25, 50, 100, 500, 1000];

  public dataSource = new MatTableDataSource<IUserProduct>([]);

  public constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    public readonly modelHelperService: ModelHelperService
  ) {}

  public ngOnInit(): void {
    console.log(this.userProducts);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['userProducts']) {
      this.dataSource = new MatTableDataSource(this.userProducts);
    }
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
}
