import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IShoppingList } from '@interfaces/models/shopping-list.interface';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService extends ModelService<IShoppingList> {
  protected basePath = 'api/user/shopping-lists';

  public constructor(
    private readonly router: Router,
    protected override readonly http: HttpClient
  ) {
    super(http);
  }

  public viewShoppingList({ uuid }: IShoppingList): void {
    this.router.navigateByUrl('/user/customer/my/shopping-lists/' + uuid);
  }
}
