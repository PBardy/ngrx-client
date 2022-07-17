import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectProductById } from '@store/selectors/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public readonly product$ = this.store.select(
    selectProductById(this.productId)
  );

  public constructor(
    private readonly store: Store<IAppState>,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {}

  private get productId(): string {
    return this.route.snapshot.params['uuid'];
  }
}
