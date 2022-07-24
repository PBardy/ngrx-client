import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserLocationSnackbarComponent } from './delete-user-location-snackbar.component';

describe('DeleteUserLocationSnackbarComponent', () => {
  let component: DeleteUserLocationSnackbarComponent;
  let fixture: ComponentFixture<DeleteUserLocationSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserLocationSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserLocationSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
