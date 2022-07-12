import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectCart } from '@store/selectors/cart.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public readonly cart$ = this.store.select(selectCart);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
