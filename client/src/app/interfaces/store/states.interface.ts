import { IAuthState } from '@store/reducers/auth.reducer';
import { ICartState } from '@store/reducers/cart.reducer';
import { ICategoriesState } from '@store/reducers/category.reducer';
import { IProductsState } from '@store/reducers/product.reducer';
import { IShippingMethodsState } from '@store/reducers/shipping-methods.reducer';
import { IShoppingListsState } from '@store/reducers/shopping-list.reducer';
import { ITagState } from '@store/reducers/tag.reducer';
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
}
