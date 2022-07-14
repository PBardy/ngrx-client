import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { tagsAdapter } from '@store/reducers/tag.reducer';

const { selectAll } = tagsAdapter.getSelectors();

export const selectSelf = (state: IAppState) => state.tags;

export const selectAllTags = createSelector(selectSelf, selectAll);
