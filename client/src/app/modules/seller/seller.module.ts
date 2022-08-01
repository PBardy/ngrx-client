import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@modules/shared/shared.module';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { CreateLocationComponent } from './pages/create-location/create-location.component';
import { UpdateLocationComponent } from './pages/update-location/update-location.component';
import { ProductsActionsComponent } from './pages/products/products-actions/products-actions.component';
import { ProductActionsComponent } from './pages/product/product-actions/product-actions.component';
import { LocationActionsComponent } from './pages/location/location-actions/location-actions.component';
import { LocationsActionsComponent } from './pages/locations/locations-actions/locations-actions.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    DrawerComponent,
    ToolbarComponent,
    ProductsComponent,
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    LocationsComponent,
    LocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
    ProductsActionsComponent,
    ProductActionsComponent,
    LocationActionsComponent,
    LocationsActionsComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, SellerRoutingModule],
})
export class SellerModule {}
