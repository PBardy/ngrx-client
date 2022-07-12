import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShoppingListDialogComponent } from './edit-shopping-list-dialog.component';

describe('EditShoppingListDialogComponent', () => {
  let component: EditShoppingListDialogComponent;
  let fixture: ComponentFixture<EditShoppingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShoppingListDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShoppingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
