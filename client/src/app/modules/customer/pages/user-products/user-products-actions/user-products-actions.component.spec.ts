import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsActionsComponent } from './user-products-actions.component';

describe('UserProductsActionsComponent', () => {
  let component: UserProductsActionsComponent;
  let fixture: ComponentFixture<UserProductsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
