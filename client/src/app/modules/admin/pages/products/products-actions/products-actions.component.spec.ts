import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsActionsComponent } from './products-actions.component';

describe('ProductsActionsComponent', () => {
  let component: ProductsActionsComponent;
  let fixture: ComponentFixture<ProductsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
