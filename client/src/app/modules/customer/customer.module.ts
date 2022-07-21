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
import { ShoppingListSearchComponent } from './pages/shopping-list/shopping-list-search/shopping-list-search.component';
import { ShoppingListActionsComponent } from './pages/shopping-list/shopping-list-actions/shopping-list-actions.component';
import { AddTagsToShoppingListDialogComponent } from './components/dialogs/add-tags-to-shopping-list-dialog/add-tags-to-shopping-list-dialog.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsActionsComponent } from './pages/products/products-actions/products-actions.component';
import { PerishableProductsCalendarWidgetComponent } from './pages/home/perishable-products-calendar-widget/perishable-products-calendar-widget.component';
import { ProductHeroComponent } from './pages/product/product-hero/product-hero.component';
import { ProductPropertiesComponent } from './pages/product/product-properties/product-properties.component';
import { ProductCardComponent } from './pages/products/product-card/product-card.component';
import { UserNotificationsEmptyComponent } from './pages/user-notifications/user-notifications-empty/user-notifications-empty.component';
import { ShoppingListsEmptyComponent } from './pages/shopping-lists/shopping-lists-empty/shopping-lists-empty.component';
import { AddProductsSidebarComponent } from './components/sidebars/add-products-sidebar/add-products-sidebar.component';
import { CreateShoppingListComponent } from './pages/create-shopping-list/create-shopping-list.component';
import { UpdateShoppingListComponent } from './pages/update-shopping-list/update-shopping-list.component';
import { ShoppingListsActionsComponent } from './pages/shopping-lists/shopping-lists-actions/shopping-lists-actions.component';
import { ShoppingListsSearchComponent } from './pages/shopping-lists/shopping-lists-search/shopping-lists-search.component';
import { ShoppingListEmptyComponent } from './pages/shopping-list/shopping-list-empty/shopping-list-empty.component';
import { CartActionsComponent } from './pages/cart/cart-actions/cart-actions.component';
import { ProductActionsComponent } from './pages/product/product-actions/product-actions.component';
import { ProductFiltersComponent } from './pages/products/product-filters/product-filters.component';
import { UserProductsActionsComponent } from './pages/user-products/user-products-actions/user-products-actions.component';
import { UserProductsEmptyComponent } from './pages/user-products/user-products-empty/user-products-empty.component';
import { UserLocationsActionsComponent } from './pages/user-locations/user-locations-actions/user-locations-actions.component';
import { UserLocationsEmptyComponent } from './pages/user-locations/user-locations-empty/user-locations-empty.component';
import { UserSettingsActionsComponent } from './pages/user-settings/user-settings-actions/user-settings-actions.component';
import { CreateShoppingListActionsComponent } from './pages/create-shopping-list/create-shopping-list-actions/create-shopping-list-actions.component';
import { HomeActionsComponent } from './pages/home/home-actions/home-actions.component';
import { UserNotificationSettingsComponent } from './pages/user-settings/user-notification-settings/user-notification-settings.component';
import { UserAccountSettingsComponent } from './pages/user-settings/user-account-settings/user-account-settings.component';
import { UserProfileSettingsComponent } from './pages/user-settings/user-profile-settings/user-profile-settings.component';
import { UserEmailSettingsComponent } from './pages/user-settings/user-email-settings/user-email-settings.component';
import { UserPasswordSettingsComponent } from './pages/user-settings/user-password-settings/user-password-settings.component';
import { UserLogoutComponent } from './pages/user-settings/user-logout/user-logout.component';

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
    ShoppingListSearchComponent,
    ShoppingListActionsComponent,
    AddTagsToShoppingListDialogComponent,
    ProductsListComponent,
    ProductsActionsComponent,
    PerishableProductsCalendarWidgetComponent,
    ProductHeroComponent,
    ProductPropertiesComponent,
    ProductCardComponent,
    UserNotificationsEmptyComponent,
    ShoppingListsEmptyComponent,
    AddProductsSidebarComponent,
    CreateShoppingListComponent,
    UpdateShoppingListComponent,
    ShoppingListsActionsComponent,
    ShoppingListsSearchComponent,
    ShoppingListEmptyComponent,
    CartActionsComponent,
    ProductActionsComponent,
    ProductFiltersComponent,
    UserProductsActionsComponent,
    UserProductsEmptyComponent,
    UserLocationsActionsComponent,
    UserLocationsEmptyComponent,
    UserSettingsActionsComponent,
    CreateShoppingListActionsComponent,
    HomeActionsComponent,
    UserNotificationSettingsComponent,
    UserAccountSettingsComponent,
    UserProfileSettingsComponent,
    UserEmailSettingsComponent,
    UserPasswordSettingsComponent,
    UserLogoutComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, CustomerRoutingModule],
})
export class CustomerModule {}
