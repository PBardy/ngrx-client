import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserProductSnackbarComponent } from './delete-user-product-snackbar.component';

describe('DeleteUserProductSnackbarComponent', () => {
  let component: DeleteUserProductSnackbarComponent;
  let fixture: ComponentFixture<DeleteUserProductSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserProductSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserProductSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
