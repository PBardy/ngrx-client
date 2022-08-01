import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '@interfaces/models/product.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { createProduct } from '@store/actions/product.actions';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public readonly form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    code: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.required]),
    description: new FormControl<string>(''),
  });

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const product = this.form.value as Partial<IProduct>;

    this.store.dispatch(createProduct({ product }));
  }
}
