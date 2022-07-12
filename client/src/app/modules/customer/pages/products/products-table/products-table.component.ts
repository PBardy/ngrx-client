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
import { Router } from '@angular/router';
import {
  IProduct,
  ProductAvailability,
} from '@interfaces/models/product.interface';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import {
  addProductsToCart,
  addProductToCart,
} from '@store/actions/cart.actions';
import {
  addProductsToShoppingList,
  addProductToShoppingList,
} from '@store/actions/shopping-list.actions';
import {
  selectAllProducts,
  selectProductsSearch,
} from '@store/selectors/product.selectors';
import { selectAllShoppingLists } from '@store/selectors/shopping-list.selectors';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(MatSort, { static: true }) public sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;

  private readonly subscriptions = new Subscription();

  private readonly products$ = this.store.select(selectAllProducts);
  private readonly productsSearch$ = this.store.select(selectProductsSearch);

  public readonly shoppingLists$ = this.store.select(selectAllShoppingLists);

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
    private readonly router: Router,
    private readonly store: Store<IAppState>,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.initSearchTerm();
    this.initFilterPredicate();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initProducts();
  }

  private initProducts(): void {
    this.subscriptions.add(
      this.products$.subscribe((products) => {
        this.dataSource.data = products;
        this.changeDetectorRef.detectChanges();
      })
    );
  }

  private initSearchTerm(): void {
    this.subscriptions.add(
      this.productsSearch$.subscribe((searchTerm) => {
        this.dataSource.filter = searchTerm;
      })
    );
  }

  private initFilterPredicate(): void {
    this.dataSource.filterPredicate = (data: IProduct, filter: string) => {
      const a = data.name.toLowerCase();
      const b = filter.toLowerCase();
      return a.includes(b) || b.includes(a);
    };
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

  public viewProduct({ uuid }: IProduct): void {
    this.router.navigateByUrl('/user/customer/products/' + uuid);
  }

  public addProductToCart(product: IProduct): void {
    this.store.dispatch(addProductToCart(product));
  }

  public addProductsToCart(): void {
    if (this.selection.isEmpty()) return;
    this.store.dispatch(
      addProductsToCart({ products: this.selection.selected })
    );
  }

  public addProductToShoppingList(
    shoppingList: IShoppingList,
    product: IProduct
  ): void {
    this.store.dispatch(addProductToShoppingList({ product, shoppingList }));
  }

  public addProductsToShoppingList(
    shoppingList: IShoppingList,
    products: Array<IProduct>
  ): void {
    this.store.dispatch(addProductsToShoppingList({ products, shoppingList }));
  }

  public trackProductByUuid(index: number, product: IProduct) {
    return product.uuid;
  }

  public isAvailable(product: IProduct) {
    return product.availability === ProductAvailability.AVAILABLE;
  }

  public isUnavailable(product: IProduct) {
    return product.availability === ProductAvailability.UNAVAILABLE;
  }

  public canPurchaseProduct(product: IProduct): boolean {
    return this.isAvailable(product);
  }
}