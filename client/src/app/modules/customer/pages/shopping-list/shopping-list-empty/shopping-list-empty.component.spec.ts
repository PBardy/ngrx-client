import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEmptyComponent } from './shopping-list-empty.component';

describe('ShoppingListEmptyComponent', () => {
  let component: ShoppingListEmptyComponent;
  let fixture: ComponentFixture<ShoppingListEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
