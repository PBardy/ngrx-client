import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListCreatedSnackbarComponent } from './shopping-list-created-snackbar.component';

describe('ShoppingListCreatedSnackbarComponent', () => {
  let component: ShoppingListCreatedSnackbarComponent;
  let fixture: ComponentFixture<ShoppingListCreatedSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListCreatedSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListCreatedSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
