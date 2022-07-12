import { ICategory } from '@interfaces/models/category.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { setManyCategories } from '@store/actions/category.actions';

export interface ICategoriesState extends EntityState<ICategory> {
  loaded: boolean;
}

export function selectId(a: ICategory): string {
  return a.uuid;
}

export function sortComparer(a: ICategory, b: ICategory): number {
  return a.name.localeCompare(b.name);
}

export const categoriesAdapter: EntityAdapter<ICategory> =
  createEntityAdapter<ICategory>({
    selectId,
    sortComparer,
  });

export const initialState: ICategoriesState = categoriesAdapter.getInitialState(
  {
    loaded: false,
  }
);

export const categoriesReducer = createReducer(
  initialState,
  on(setManyCategories, (state, action) => {
    return categoriesAdapter.setMany(action.categories, state);
  })
);
