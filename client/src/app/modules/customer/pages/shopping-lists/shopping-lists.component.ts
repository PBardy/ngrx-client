import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectAllShoppingLists } from '@store/selectors/shopping-list.selectors';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss'],
})
export class ShoppingListsComponent implements OnInit {
  public readonly shoppingLists$ = this.store.select(selectAllShoppingLists);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
