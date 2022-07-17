import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShoppingListComponent } from './update-shopping-list.component';

describe('UpdateShoppingListComponent', () => {
  let component: UpdateShoppingListComponent;
  let fixture: ComponentFixture<UpdateShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShoppingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
