import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@interfaces/models/product.interface';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { ModelHelperService } from '@services/model-helper.service';
import { ProductService } from '@services/product.service';
import {
  removeProductFromShoppingList,
  removeProductsFromShoppingList,
} from '@store/actions/shopping-list.actions';
import { selectShoppingListByUuid } from '@store/selectors/shopping-list.selectors';
import { filter, map, Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shopping-list-table',
  templateUrl: './shopping-list-table.component.html',
  styleUrls: ['./shopping-list-table.component.scss'],
})
export class ShoppingListTableComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(MatSort, { static: true }) public sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;

  private readonly subscriptions = new Subscription();

  private shoppingList: IShoppingList;

  public shoppingList$ = this.store.select(
    selectShoppingListByUuid(this.shoppingListId)
  );

  public readonly columns = [
    'select',
    'id',
    'name',
    'price',
    'status',
    'options',
  ];

  public readonly pageSizes = [5, 10, 25, 50, 100, 500, 1000];

  public dataSource = new MatTableDataSource<IProduct>([]);
  public selection = new SelectionModel<IProduct>(true, []);

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<IAppState>,
    private readonly changeDetectorRef: ChangeDetectorRef,
    public readonly modelHelperService: ModelHelperService,
    public readonly productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.initFilterPredicate();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initShoppingList();
  }

  private get shoppingListId(): string {
    return this.route.snapshot.params['uuid'];
  }

  private initShoppingList(): void {
    this.subscriptions.add(
      this.shoppingList$
        .pipe(
          filter((shoppingList) => Boolean(shoppingList)),
          map((shoppingList) => shoppingList as IShoppingList)
        )
        .subscribe((shoppingList) => {
          this.shoppingList = shoppingList;
          this.dataSource.data = shoppingList.items;
          this.changeDetectorRef.detectChanges();
        })
    );
  }

  private initFilterPredicate(): void {}

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

  public removeProduct(product: IProduct): void {
    this.store.dispatch(
      removeProductFromShoppingList({
        product,
        shoppingList: this.shoppingList,
      })
    );
  }

  public removeProducts(): void {
    if (this.selection.isEmpty()) return;
    this.store.dispatch(
      removeProductsFromShoppingList({
        shoppingList: this.shoppingList,
        products: this.selection.selected,
      })
    );
  }
}
