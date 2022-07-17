import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingListsComponent } from './pages/shopping-lists/shopping-lists.component';
import { UserLocationsComponent } from './pages/user-locations/user-locations.component';
import { UserProductsComponent } from './pages/user-products/user-products.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ProductComponent } from './pages/product/product.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { UserNotificationsComponent } from './pages/user-notifications/user-notifications.component';
import { UserProductComponent } from './pages/user-product/user-product.component';
import { UserLocationComponent } from './pages/user-location/user-location.component';
import { UserNotificationComponent } from './pages/user-notification/user-notification.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountComponent } from './pages/account/account.component';
import { UpdateShoppingListComponent } from './pages/update-shopping-list/update-shopping-list.component';
import { CreateShoppingListComponent } from './pages/create-shopping-list/create-shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        data: { title: 'Home' },
        path: '',
        component: HomeComponent,
      },
      {
        data: { title: 'Products' },
        path: 'products',
        component: ProductsComponent,
      },
      {
        data: { title: 'Product' },
        path: 'products/:uuid',
        component: ProductComponent,
      },
      {
        data: { title: 'Cart' },
        path: 'cart',
        component: CartComponent,
      },
      {
        data: { title: 'Create shopping list' },
        path: 'shopping-lists/create',
        component: CreateShoppingListComponent,
      },
      {
        path: 'my',
        children: [
          {
            data: { title: 'Your account' },
            path: 'account',
            component: AccountComponent,
          },
          {
            data: { title: 'Create shopping list' },
            path: 'products',
            component: UserProductsComponent,
          },
          {
            data: { title: 'Your products' },
            path: 'products/:uuid',
            component: UserProductComponent,
          },
          {
            data: { title: 'Locations' },
            path: 'locations',
            component: UserLocationsComponent,
          },
          {
            data: { title: 'Location' },
            path: 'locations/:uuid',
            component: UserLocationComponent,
          },
          {
            data: { title: 'Shopping lists' },
            path: 'shopping-lists',
            component: ShoppingListsComponent,
          },
          {
            data: { title: 'Update shopping list' },
            path: 'shopping-lists/:uuid/update',
            component: UpdateShoppingListComponent,
          },
          {
            data: { title: 'Shopping list' },
            path: 'shopping-lists/:uuid',
            component: ShoppingListComponent,
          },
          {
            data: { title: 'Settings' },
            path: 'settings',
            component: UserSettingsComponent,
          },
          {
            data: { title: 'Notifications' },
            path: 'notifications',
            component: UserNotificationsComponent,
          },
          {
            data: { title: 'Notification' },
            path: 'notifications/:uuid',
            component: UserNotificationComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
