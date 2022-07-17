import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsSearchComponent } from './shopping-lists-search.component';

describe('ShoppingListsSearchComponent', () => {
  let component: ShoppingListsSearchComponent;
  let fixture: ComponentFixture<ShoppingListsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
