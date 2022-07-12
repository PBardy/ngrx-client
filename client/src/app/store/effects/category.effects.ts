import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '@services/category.service';
import {
  prefetchCategories,
  setManyCategories,
} from '@store/actions/category.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class CategoryEffects {
  public prefetchCategories = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchCategories),
      exhaustMap(() =>
        this.categoryService.getAll().pipe(
          map((res) => setManyCategories({ categories: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly categoryService: CategoryService
  ) {}
}
