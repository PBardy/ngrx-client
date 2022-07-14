import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListActionsComponent } from './shopping-list-actions.component';

describe('ShoppingListActionsComponent', () => {
  let component: ShoppingListActionsComponent;
  let fixture: ComponentFixture<ShoppingListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
