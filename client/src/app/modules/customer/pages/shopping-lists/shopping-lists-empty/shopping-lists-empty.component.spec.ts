import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsEmptyComponent } from './shopping-lists-empty.component';

describe('ShoppingListsEmptyComponent', () => {
  let component: ShoppingListsEmptyComponent;
  let fixture: ComponentFixture<ShoppingListsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
