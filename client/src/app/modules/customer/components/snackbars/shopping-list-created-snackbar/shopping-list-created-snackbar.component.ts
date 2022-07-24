import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';

@Component({
  selector: 'app-shopping-list-created-snackbar',
  templateUrl: './shopping-list-created-snackbar.component.html',
  styleUrls: ['./shopping-list-created-snackbar.component.scss'],
})
export class ShoppingListCreatedSnackbarComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly ref: MatSnackBarRef<ShoppingListCreatedSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: IShoppingList
  ) {}

  ngOnInit(): void {}

  public close(): void {
    this.ref.dismiss();
  }

  public view(): void {
    this.ref.dismissWithAction();
    this.router.navigate(['/user/customer/my/shopping-lists/', this.data.uuid]);
  }
}
