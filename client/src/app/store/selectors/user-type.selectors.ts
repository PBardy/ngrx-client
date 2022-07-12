import {
  IUserTypeState,
  userTypeAdapter,
} from '@store/reducers/user-type.reducer';

const { selectAll } = userTypeAdapter.getSelectors();

export const getUserTypes = (state: IUserTypeState) => selectAll(state);
