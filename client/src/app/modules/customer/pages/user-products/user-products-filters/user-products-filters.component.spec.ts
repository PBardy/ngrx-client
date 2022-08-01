import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsFiltersComponent } from './user-products-filters.component';

describe('UserProductsFiltersComponent', () => {
  let component: UserProductsFiltersComponent;
  let fixture: ComponentFixture<UserProductsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
