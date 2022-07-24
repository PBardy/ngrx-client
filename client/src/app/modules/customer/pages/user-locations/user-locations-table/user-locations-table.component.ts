import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUserLocation } from '@interfaces/models/user-location.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { PaginatorComponent } from '@modules/shared/components/paginator/paginator.component';
import { Store } from '@ngrx/store';
import { ModelHelperService } from '@services/model-helper.service';
import { selectAllUserLocations } from '@store/selectors/user-location.selectors';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-locations-table',
  templateUrl: './user-locations-table.component.html',
  styleUrls: ['./user-locations-table.component.scss'],
})
export class UserLocationsTableComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(MatSort, { static: true }) public sort: MatSort;
  @ViewChild(PaginatorComponent) public paginator: MatPaginator;
  @Input() public selection = new SelectionModel<IUserLocation>(true, []);

  private readonly subscriptions = new Subscription();

  private readonly userLocations$ = this.store.select(selectAllUserLocations);

  public readonly columns = ['select', 'id', 'name', 'options'];

  public readonly pageSizeOptions = [5, 10, 25, 50, 100, 500, 1000];

  public dataSource = new MatTableDataSource<IUserLocation>([]);

  public constructor(
    private readonly store: Store<IAppState>,
    private readonly changeDetectorRef: ChangeDetectorRef,
    public readonly modelHelperService: ModelHelperService
  ) {}

  public ngOnInit(): void {
    this.initFilterPredicate();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.initProducts();
  }

  private initProducts(): void {
    this.subscriptions.add(
      this.userLocations$.subscribe((products) => {
        this.dataSource.data = products;
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRef.detectChanges();
      })
    );
  }

  private initFilterPredicate(): void {
    this.dataSource.filterPredicate = (data: IUserLocation, filter: string) => {
      const a = data.location.name.toLowerCase();
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
}
