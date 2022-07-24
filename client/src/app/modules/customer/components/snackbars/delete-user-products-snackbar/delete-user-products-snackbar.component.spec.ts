import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserProductsSnackbarComponent } from './delete-user-products-snackbar.component';

describe('DeleteUserProductsSnackbarComponent', () => {
  let component: DeleteUserProductsSnackbarComponent;
  let fixture: ComponentFixture<DeleteUserProductsSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserProductsSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserProductsSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
