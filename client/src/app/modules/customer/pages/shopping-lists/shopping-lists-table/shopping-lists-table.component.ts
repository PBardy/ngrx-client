import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { AddShoppingListDialogComponent } from '@modules/customer/components/dialogs/add-shopping-list-dialog/add-shopping-list-dialog.component';
import { AddTagsToShoppingListDialogComponent } from '@modules/customer/components/dialogs/add-tags-to-shopping-list-dialog/add-tags-to-shopping-list-dialog.component';
import { EditShoppingListDialogComponent } from '@modules/customer/components/dialogs/edit-shopping-list-dialog/edit-shopping-list-dialog.component';
import { Store } from '@ngrx/store';
import { ShoppingListService } from '@services/shopping-list.service';
import {
  deleteShoppingList,
  deleteShoppingLists,
  duplicateShoppingList,
  duplicateShoppingLists,
} from '@store/actions/shopping-list.actions';
import { selectAllShoppingLists } from '@store/selectors/shopping-list.selectors';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-shopping-lists-table',
  templateUrl: './shopping-lists-table.component.html',
  styleUrls: ['./shopping-lists-table.component.scss'],
})
export class ShoppingListsTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort;

  private readonly subscriptions = new Subscription();

  private readonly shoppingLists = this.store.select(selectAllShoppingLists);

  public readonly columns = ['select', 'id', 'name', 'options'];
  public readonly pageSizes = [5, 10, 25, 50, 100, 500, 1000];

  public searchTerm = '';
  public searchTermSub = new Subject<string>();
  public dataSource = new MatTableDataSource<IShoppingList>([]);
  public selection = new SelectionModel<IShoppingList>(true, []);

  public constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly store: Store<IAppState>,
    public readonly shoppingListService: ShoppingListService
  ) {}

  public ngOnInit(): void {
    this.initProducts();
    this.initSearchTerm();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initProducts(): void {
    this.subscriptions.add(
      this.shoppingLists.subscribe((shoppingLists) => {
        this.dataSource = new MatTableDataSource<IShoppingList>(shoppingLists);
      })
    );
  }

  private initSearchTerm(): void {
    this.subscriptions.add(
      this.searchTermSub
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe((searchTerm) => {
          this.searchTerm = searchTerm;
          this.dataSource.filter = searchTerm;
        })
    );
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

  public createShoppingList(): void {
    this.dialog.open(AddShoppingListDialogComponent);
  }

  public editShoppingList(shoppingList: IShoppingList): void {
    this.dialog.open(EditShoppingListDialogComponent, { data: shoppingList });
  }

  public duplicateShoppingList(shoppingList: IShoppingList): void {
    this.store.dispatch(duplicateShoppingList(shoppingList));
  }

  public deleteShoppingList(shoppingList: IShoppingList): void {
    this.store.dispatch(deleteShoppingList(shoppingList));
  }

  public duplicateShoppingLists(): void {
    if (this.selection.isEmpty()) return;
    const uuids = this.selection.selected.map((selection) => selection.uuid);
    this.store.dispatch(duplicateShoppingLists({ uuids }));
  }

  public deleteShoppingLists(): void {
    if (this.selection.isEmpty()) return;
    const uuids = this.selection.selected.map((selection) => selection.uuid);
    this.selection.clear();
    this.store.dispatch(deleteShoppingLists({ uuids }));
  }

  public addTagsToShoppingList(shoppingList: IShoppingList): void {
    this.dialog.open(AddTagsToShoppingListDialogComponent, {
      data: shoppingList,
    });
  }
}
