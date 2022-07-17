import { INotification } from '@interfaces/models/notifications.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface INotificationsState extends EntityState<INotification> {
  loaded: boolean;
  searchTerm: string;
  searchHistory: Array<string>;
}

export function selectId(a: INotification): string {
  return a.uuid;
}

export function sortComparer(a: INotification, b: INotification): number {
  return a.title.localeCompare(b.title);
}

export const notificationsAdapater: EntityAdapter<INotification> =
  createEntityAdapter<INotification>({
    selectId,
    sortComparer,
  });

export const initialState: INotificationsState =
  notificationsAdapater.getInitialState({
    loaded: false,
    searchTerm: '',
    searchHistory: [],
  });

export const notificationsReducer = createReducer(initialState);
