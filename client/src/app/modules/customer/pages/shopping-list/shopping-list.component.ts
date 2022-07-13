import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectShoppingListByUuid } from '@store/selectors/shopping-list.selectors';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public readonly shoppingList$ = this.store.select(
    selectShoppingListByUuid(this.shoppingListId)
  );

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<IAppState>
  ) {}

  public ngOnInit(): void {}

  private get shoppingListId(): string {
    return this.route.snapshot.params['uuid'];
  }
}
