import { UserRole } from '@interfaces/models/user-type.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { createSelector } from '@ngrx/store';
import { usersAdapter } from '@store/actions/user.actions';

const { selectAll } = usersAdapter.getSelectors();

export const selectSelf = (state: IAppState) => state.users;

export const selectAllUsers = createSelector(selectSelf, selectAll);

export const selectAllAdmins = createSelector(selectAllUsers, (users) =>
  users.filter((user) => user.userType.tag === UserRole.ADMIN)
);

export const selectAllSellers = createSelector(selectAllUsers, (users) =>
  users.filter((user) => user.userType.tag === UserRole.SELLER)
);

export const selectAllCustomers = createSelector(selectAllUsers, (users) =>
  users.filter((user) => user.userType.tag === UserRole.CUSTOMER)
);
