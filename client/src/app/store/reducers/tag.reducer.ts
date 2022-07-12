import { ITag } from '@interfaces/models/tag.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { setManyTags } from '@store/actions/tag.actions';

export interface ITagState extends EntityState<ITag> {
  loaded: boolean;
}

export function selectId(a: ITag): string {
  return a.uuid;
}

export function sortComparer(a: ITag, b: ITag): number {
  return a.name.localeCompare(b.name);
}

export const tagsAdapter: EntityAdapter<ITag> = createEntityAdapter<ITag>({
  selectId,
  sortComparer,
});

export const initialState: ITagState = tagsAdapter.getInitialState({
  loaded: false,
});

export const tagsReducer = createReducer(
  initialState,
  on(setManyTags, (state, action) => {
    return tagsAdapter.setMany(action.tags, state);
  })
);
