import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShoppingListActionsComponent } from './create-shopping-list-actions.component';

describe('CreateShoppingListActionsComponent', () => {
  let component: CreateShoppingListActionsComponent;
  let fixture: ComponentFixture<CreateShoppingListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShoppingListActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShoppingListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
