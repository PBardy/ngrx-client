import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TagService } from '@services/tag.service';
import { prefetchTags, setManyTags } from '@store/actions/tag.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class TagEffects {
  public prefetchTags = createEffect(() =>
    this.actions.pipe(
      ofType(prefetchTags),
      exhaustMap(() =>
        this.tagService.getAll().pipe(
          map((res) => setManyTags({ tags: res.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly tagService: TagService
  ) {}
}
