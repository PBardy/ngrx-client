import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddShoppingListDialogComponent } from '../dialogs/add-shopping-list-dialog/add-shopping-list-dialog.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  public addShoppingList(): void {
    this.dialog.open(AddShoppingListDialogComponent);
  }
}
