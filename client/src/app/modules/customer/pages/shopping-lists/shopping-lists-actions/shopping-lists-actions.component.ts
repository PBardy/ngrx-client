import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { ShoppingListService } from '@services/shopping-list.service';

@Component({
  selector: 'app-shopping-lists-actions',
  templateUrl: './shopping-lists-actions.component.html',
  styleUrls: ['./shopping-lists-actions.component.scss'],
})
export class ShoppingListsActionsComponent implements OnInit {
  @Input() public selection: SelectionModel<IShoppingList>;

  public constructor(
    public readonly shoppingListService: ShoppingListService
  ) {}

  public ngOnInit(): void {}
}
