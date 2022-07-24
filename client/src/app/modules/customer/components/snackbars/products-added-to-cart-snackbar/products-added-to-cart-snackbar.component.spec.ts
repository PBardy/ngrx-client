import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddedToCartSnackbarComponent } from './products-added-to-cart-snackbar.component';

describe('ProductsAddedToCartSnackbarComponent', () => {
  let component: ProductsAddedToCartSnackbarComponent;
  let fixture: ComponentFixture<ProductsAddedToCartSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddedToCartSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddedToCartSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
