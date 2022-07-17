import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '@modules/material/material.module';
import { UnauthenticatedModule } from '@modules/unauthenticated/unauthenticated.module';
import { UserTypeEffects } from '@store/effects/user-type.effects';
import { userTypeReducer } from '@store/reducers/user-type.reducer';
import { AuthEffects } from '@store/effects/auth.effects';
import { authReducer } from '@store/reducers/auth.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AdminModule } from '@modules/admin/admin.module';
import { SellerModule } from '@modules/seller/seller.module';
import { CustomerModule } from '@modules/customer/customer.module';
import { AuthInterceptor } from '@interceptors/auth.interceptor';
import { ProductEffects } from '@store/effects/product.effects';
import { productsReducer } from '@store/reducers/product.reducer';
import { categoriesReducer } from '@store/reducers/category.reducer';
import { CategoryEffects } from '@store/effects/category.effects';
import { tagsReducer } from '@store/reducers/tag.reducer';
import { TagEffects } from '@store/effects/tag.effect';
import { ShoppingListEffects } from '@store/effects/shopping-list.effects';
import { shoppingListsReducer } from '@store/reducers/shopping-list.reducer';
import { cartReducer } from '@store/reducers/cart.reducer';
import { CartEffects } from '@store/effects/cart.effects';
import { shippingMethodsReducer } from '@store/reducers/shipping-methods.reducer';
import { ShippingMethodEffects } from '@store/effects/shipping-method.effects';
import { ShoppingListItemEffects } from '@store/effects/shopping-list-item.effects';
import { notificationsReducer } from '@store/reducers/notifications.reducer';
import { userProductsReducer } from '@store/reducers/user-product.reducer';
import { userLocationsReducer } from '@store/reducers/user-locations.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        auth: authReducer,
        tags: tagsReducer,
        products: productsReducer,
        categories: categoriesReducer,
        userTypes: userTypeReducer,
        shoppingLists: shoppingListsReducer,
        cart: cartReducer,
        shippingMethods: shippingMethodsReducer,
        notifications: notificationsReducer,
        userProducts: userProductsReducer,
        userLocations: userLocationsReducer,
      },
      {}
    ),
    EffectsModule.forRoot([
      TagEffects,
      AuthEffects,
      ProductEffects,
      CategoryEffects,
      UserTypeEffects,
      ShoppingListEffects,
      ShoppingListItemEffects,
      CartEffects,
      ShippingMethodEffects,
    ]),
    HttpClientModule,
    MaterialModule,
    AdminModule,
    SellerModule,
    CustomerModule,
    UnauthenticatedModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
