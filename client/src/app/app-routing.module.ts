import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { UnauthenticatedGuard } from './guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: 'user',
    canActivate: [AuthenticatedGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/admin/admin-routing.module').then(
            (m) => m.AdminRoutingModule
          ),
      },
      {
        path: 'seller',
        loadChildren: () =>
          import('./modules/seller/seller-routing.module').then(
            (m) => m.SellerRoutingModule
          ),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./modules/customer/customer-routing.module').then(
            (m) => m.CustomerRoutingModule
          ),
      },
    ],
  },
  {
    path: '',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./modules/unauthenticated/unauthenticated-routing.module').then(
        (m) => m.UnauthenticatedRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
