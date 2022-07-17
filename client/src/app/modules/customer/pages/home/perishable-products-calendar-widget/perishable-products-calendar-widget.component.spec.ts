import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerishableProductsCalendarWidgetComponent } from './perishable-products-calendar-widget.component';

describe('PerishableProductsCalendarWidgetComponent', () => {
  let component: PerishableProductsCalendarWidgetComponent;
  let fixture: ComponentFixture<PerishableProductsCalendarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerishableProductsCalendarWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerishableProductsCalendarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
