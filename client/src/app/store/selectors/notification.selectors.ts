import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { notificationsAdapater } from '@store/reducers/notifications.reducer';

const { selectAll } = notificationsAdapater.getSelectors();

export const selectSelf = (state: IAppState) => state.notifications;

export const selectAllNotifications = createSelector(selectSelf, selectAll);
