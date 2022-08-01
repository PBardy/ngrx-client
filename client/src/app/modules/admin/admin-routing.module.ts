import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPropertiesComponent } from '@modules/customer/pages/product/product-properties/product-properties.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellersComponent } from './pages/sellers/sellers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'sellers',
        children: [
          { path: '', component: SellersComponent },
          { path: ':uuid', component: SellerComponent },
        ],
      },
      {
        path: 'customers',
        children: [
          { path: '', component: CustomersComponent },
          { path: ':uuid', component: CustomerComponent },
        ],
      },
      {
        path: 'products',
        children: [
          { path: '', component: ProductsComponent },
          { path: 'properties', component: ProductPropertiesComponent },
          { path: ':uuid', component: ProductComponent },
        ],
      },
      {
        path: 'location',
        children: [
          { path: '', component: LocationsComponent },
          { path: ':uuid', component: LocationComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
