import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '@modules/customer/pages/product/product.component';
import { CreateLocationComponent } from './pages/create-location/create-location.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ProductsComponent } from './pages/products/products.component';
import { UpdateLocationComponent } from './pages/update-location/update-location.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'products',
        children: [
          { path: 'create', component: CreateProductComponent },
          { path: ':uuid/update', component: UpdateProductComponent },
          { path: ':uuid', component: ProductComponent },
          { path: '', component: ProductsComponent },
        ],
      },
      {
        path: 'locations',
        children: [
          { path: 'create', component: CreateLocationComponent },
          { path: ':uuid/update', component: UpdateLocationComponent },
          { path: ':uuid', component: LocationComponent },
          { path: '', component: LocationsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
