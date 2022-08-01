import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '@services/product.service';
import {
  createProduct,
  prefetchProducts,
  setManyProducts,
  setOneProduct,
} from '@store/actions/product.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class ProductEffects {
  public prefetchProducts = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchProducts),
      exhaustMap(() =>
        this.productService.getAll().pipe(
          map((res) => setManyProducts({ products: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  public createProduct = createEffect(() =>
    this.actions.pipe(
      ofType(createProduct),
      exhaustMap(({ product }) =>
        this.productService.createOne(product).pipe(
          map((res) => setOneProduct({ product: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly productService: ProductService
  ) {}
}
