import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListSearchComponent } from './shopping-list-search.component';

describe('ShoppingListSearchComponent', () => {
  let component: ShoppingListSearchComponent;
  let fixture: ComponentFixture<ShoppingListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
