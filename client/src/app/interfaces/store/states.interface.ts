import { IUsersState } from '@store/actions/user.actions';
import { IAuthState } from '@store/reducers/auth.reducer';
import { ICartState } from '@store/reducers/cart.reducer';
import { ICategoriesState } from '@store/reducers/category.reducer';
import { INotificationsState } from '@store/reducers/notifications.reducer';
import { IProductsState } from '@store/reducers/product.reducer';
import { IShippingMethodsState } from '@store/reducers/shipping-methods.reducer';
import { IShoppingListsState } from '@store/reducers/shopping-list.reducer';
import { ITagState } from '@store/reducers/tag.reducer';
import { IUserLocationsState } from '@store/reducers/user-locations.reducer';
import { IUserProductsState } from '@store/reducers/user-product.reducer';
import { IUserTypeState } from '@store/reducers/user-type.reducer';

export interface IAppState {
  auth: IAuthState;
  tags: ITagState;
  categories: ICategoriesState;
  products: IProductsState;
  userTypes: IUserTypeState;
  shoppingLists: IShoppingListsState;
  shippingMethods: IShippingMethodsState;
  cart: ICartState;
  notifications: INotificationsState;
  userProducts: IUserProductsState;
  userLocations: IUserLocationsState;
  users: IUsersState;
}
