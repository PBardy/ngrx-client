import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICartCheckout } from '@interfaces/models/cart.interface';
import { IShippingMethod } from '@interfaces/models/shipping-method.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { checkoutCart } from '@store/actions/cart.actions';
import {
  selectCart,
  selectCartCost,
  selectTotalCartCost,
} from '@store/selectors/cart.selectors';
import { selectAllShippingMethods } from '@store/selectors/shipping-method.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss'],
})
export class CartCheckoutComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public readonly form = new FormGroup({
    promoCode: new FormControl<string>(''),
    shippingMethod: new FormControl<IShippingMethod | null>(null, [
      Validators.required,
    ]),
  });

  public shippingMethodCost = 0;

  public readonly cart$ = this.store.select(selectCart);

  public readonly cartCost$ = this.store.select(selectCartCost);

  public readonly shippingMethods$ = this.store.select(
    selectAllShippingMethods
  );

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;
    this.store.dispatch(
      checkoutCart({
        promoCode: this.form.value.promoCode!,
        shippingMethod: this.form.value.shippingMethod!.uuid!,
      })
    );
  }

  public get shippingMethodControl() {
    return this.form.controls.shippingMethod;
  }

  public get shippingCost(): number | undefined {
    return this.shippingMethodControl.value?.price;
  }

  public get isInvalidShippingMethod(): boolean {
    const { invalid, touched } = this.shippingMethodControl;
    return invalid && touched;
  }
}
