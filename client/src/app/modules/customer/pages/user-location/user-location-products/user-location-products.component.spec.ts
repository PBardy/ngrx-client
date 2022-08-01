import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationProductsComponent } from './user-location-products.component';

describe('UserLocationProductsComponent', () => {
  let component: UserLocationProductsComponent;
  let fixture: ComponentFixture<UserLocationProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
