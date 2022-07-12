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
import { IProduct } from '@interfaces/models/product.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { select, Store } from '@ngrx/store';
import {
  removeAllProductsFromCart,
  removeProductFromCart,
  removeProductsFromCart,
} from '@store/actions/cart.actions';
import { selectCart } from '@store/selectors/cart.selectors';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss'],
})
export class CartTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort, { static: true }) public sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;

  private readonly subscriptions = new Subscription();

  private readonly products$ = this.store.select(selectCart);

  public readonly columns = ['select', 'id', 'name', 'price', 'options'];
  public readonly pageSizes = [5, 10, 25, 50, 100, 500, 1000];

  public dataSource = new MatTableDataSource<IProduct>([]);
  public selection = new SelectionModel<IProduct>(true, []);

  public constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initProducts();
    this.initFilterPredicate();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initProducts(): void {
    this.subscriptions.add(
      this.products$.subscribe((products) => {
        this.dataSource.data = products;
        this.changeDetectorRef.detectChanges();
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

  public trackProductByUuid(index: number, product: IProduct) {
    return product.uuid;
  }

  public removeProductFromCart(product: IProduct): void {
    this.store.dispatch(removeProductFromCart(product));
  }

  public removeProductsFromCart(): void {
    if (this.selection.isEmpty()) return;
    const products = this.selection.selected;
    this.store.dispatch(removeProductsFromCart({ products }));
  }

  public removeAllProductsFromCart(): void {
    this.store.dispatch(removeAllProductsFromCart());
    this.selection.clear();
  }
}
