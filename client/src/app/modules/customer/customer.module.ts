import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@modules/shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { UserProductsComponent } from './pages/user-products/user-products.component';
import { UserLocationsComponent } from './pages/user-locations/user-locations.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { UserNotificationsComponent } from './pages/user-notifications/user-notifications.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShoppingListsComponent } from './pages/shopping-lists/shopping-lists.component';
import { ProductsTableComponent } from './pages/products/products-table/products-table.component';
import { AddShoppingListDialogComponent } from './components/dialogs/add-shopping-list-dialog/add-shopping-list-dialog.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingListsTableComponent } from './pages/shopping-lists/shopping-lists-table/shopping-lists-table.component';
import { EditShoppingListDialogComponent } from './components/dialogs/edit-shopping-list-dialog/edit-shopping-list-dialog.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsSearchComponent } from './pages/products/products-search/products-search.component';
import { UserProductComponent } from './pages/user-product/user-product.component';
import { UserLocationComponent } from './pages/user-location/user-location.component';
import { UserNotificationComponent } from './pages/user-notification/user-notification.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountComponent } from './pages/account/account.component';
import { CartTableComponent } from './pages/cart/cart-table/cart-table.component';
import { CartCheckoutComponent } from './pages/cart/cart-checkout/cart-checkout.component';
import { CartEmptyComponent } from './pages/cart/cart-empty/cart-empty.component';
import { ShoppingListTableComponent } from './pages/shopping-list/shopping-list-table/shopping-list-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProductsComponent,
    UserProductsComponent,
    UserLocationsComponent,
    UserSettingsComponent,
    UserNotificationsComponent,
    DrawerComponent,
    ToolbarComponent,
    ShoppingListsComponent,
    ProductsTableComponent,
    AddShoppingListDialogComponent,
    ShoppingListComponent,
    ShoppingListsTableComponent,
    EditShoppingListDialogComponent,
    ProductComponent,
    ProductsSearchComponent,
    UserProductComponent,
    UserLocationComponent,
    UserNotificationComponent,
    CartComponent,
    AccountComponent,
    CartTableComponent,
    CartCheckoutComponent,
    CartEmptyComponent,
    ShoppingListTableComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, CustomerRoutingModule],
})
export class CustomerModule {}
