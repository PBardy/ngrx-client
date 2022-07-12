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

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:uuid', component: ProductComponent },
      { path: 'cart', component: CartComponent },
      {
        path: 'my',
        children: [
          { path: 'account', component: AccountComponent },
          { path: 'products', component: UserProductsComponent },
          { path: 'products/:uuid', component: UserProductComponent },
          { path: 'locations', component: UserLocationsComponent },
          { path: 'locations/:uuid', component: UserLocationComponent },
          { path: 'shopping-lists', component: ShoppingListsComponent },
          { path: 'shopping-lists/:uuid', component: ShoppingListComponent },
          { path: 'settings', component: UserSettingsComponent },
          { path: 'notifications', component: UserNotificationsComponent },
          { path: 'notifications/:uuid', component: UserNotificationComponent },
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
