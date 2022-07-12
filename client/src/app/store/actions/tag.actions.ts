import { ITag } from '@interfaces/models/tag.interface';
import { createAction, props } from '@ngrx/store';

export const prefetchTags = createAction('tags/prefetch');

export const setManyTags = createAction(
  'tags/setMany',
  props<{ tags: Array<ITag> }>()
);
