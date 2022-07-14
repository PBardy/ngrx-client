import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagsToShoppingListDialogComponent } from './add-tags-to-shopping-list-dialog.component';

describe('AddTagsToShoppingListDialogComponent', () => {
  let component: AddTagsToShoppingListDialogComponent;
  let fixture: ComponentFixture<AddTagsToShoppingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTagsToShoppingListDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTagsToShoppingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
