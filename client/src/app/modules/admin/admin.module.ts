import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@modules/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerActionsComponent } from './pages/customer/customer-actions/customer-actions.component';
import { CustomersActionsComponent } from './pages/customers/customers-actions/customers-actions.component';
import { LocationActionsComponent } from './pages/location/location-actions/location-actions.component';
import { LocationsActionsComponent } from './pages/locations/locations-actions/locations-actions.component';
import { ProductActionsComponent } from './pages/product/product-actions/product-actions.component';
import { ProductsActionsComponent } from './pages/products/products-actions/products-actions.component';
import { SellerActionsComponent } from './pages/seller/seller-actions/seller-actions.component';
import { SellersActionsComponent } from './pages/sellers/sellers-actions/sellers-actions.component';
import { ProductPropertiesComponent } from './pages/product-properties/product-properties.component';
import { ProductsTableComponent } from './pages/products/products-table/products-table.component';
import { LocationsTableComponent } from './pages/locations/locations-table/locations-table.component';
import { CustomersTableComponent } from './pages/customers/customers-table/customers-table.component';
import { SellersTableComponent } from './pages/sellers/sellers-table/sellers-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DrawerComponent,
    ToolbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    LocationsComponent,
    LocationComponent,
    SellersComponent,
    SellerComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerActionsComponent,
    CustomersActionsComponent,
    LocationActionsComponent,
    LocationsActionsComponent,
    ProductActionsComponent,
    ProductsActionsComponent,
    SellerActionsComponent,
    SellersActionsComponent,
    ProductPropertiesComponent,
    ProductsTableComponent,
    LocationsTableComponent,
    CustomersTableComponent,
    SellersTableComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, AdminRoutingModule],
})
export class AdminModule {}
