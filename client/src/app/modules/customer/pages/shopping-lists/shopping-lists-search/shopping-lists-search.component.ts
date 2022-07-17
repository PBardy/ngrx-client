import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-lists-search',
  templateUrl: './shopping-lists-search.component.html',
  styleUrls: ['./shopping-lists-search.component.scss'],
})
export class ShoppingListsSearchComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public searchTerm = '';
  public searchTermSub = new Subject<string>();

  public constructor() {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
