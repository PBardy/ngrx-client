import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsTableComponent } from './user-products-table.component';

describe('UserProductsTableComponent', () => {
  let component: UserProductsTableComponent;
  let fixture: ComponentFixture<UserProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
