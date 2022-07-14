import { Component, Input, OnInit } from '@angular/core';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';

@Component({
  selector: 'app-shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html',
  styleUrls: ['./shopping-list-actions.component.scss'],
})
export class ShoppingListActionsComponent implements OnInit {
  @Input() public shoppingList: IShoppingList;

  constructor() {}

  ngOnInit(): void {}
}
