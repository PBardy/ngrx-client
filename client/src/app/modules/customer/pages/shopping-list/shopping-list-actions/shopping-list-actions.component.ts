import { Component, Input, OnInit } from '@angular/core';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html',
  styleUrls: ['./shopping-list-actions.component.scss'],
})
export class ShoppingListActionsComponent implements OnInit {
  @Input() public shoppingList: IShoppingList;

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
