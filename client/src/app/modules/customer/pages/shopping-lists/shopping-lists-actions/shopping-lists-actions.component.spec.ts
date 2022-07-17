import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsActionsComponent } from './shopping-lists-actions.component';

describe('ShoppingListsActionsComponent', () => {
  let component: ShoppingListsActionsComponent;
  let fixture: ComponentFixture<ShoppingListsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListsActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
