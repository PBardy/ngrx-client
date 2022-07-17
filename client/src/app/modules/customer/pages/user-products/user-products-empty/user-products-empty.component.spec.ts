import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsEmptyComponent } from './user-products-empty.component';

describe('UserProductsEmptyComponent', () => {
  let component: UserProductsEmptyComponent;
  let fixture: ComponentFixture<UserProductsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
