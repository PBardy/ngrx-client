import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-search',
  templateUrl: './shopping-list-search.component.html',
  styleUrls: ['./shopping-list-search.component.scss'],
})
export class ShoppingListSearchComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public searchTerm = '';
  public searchTermSub = new Subject<string>();

  public constructor() {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
