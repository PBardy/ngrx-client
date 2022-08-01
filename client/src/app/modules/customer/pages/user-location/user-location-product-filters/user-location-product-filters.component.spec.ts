import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationProductFiltersComponent } from './user-location-product-filters.component';

describe('UserLocationProductFiltersComponent', () => {
  let component: UserLocationProductFiltersComponent;
  let fixture: ComponentFixture<UserLocationProductFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationProductFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationProductFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
