import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserLocationsSnackbarComponent } from './delete-user-locations-snackbar.component';

describe('DeleteUserLocationsSnackbarComponent', () => {
  let component: DeleteUserLocationsSnackbarComponent;
  let fixture: ComponentFixture<DeleteUserLocationsSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserLocationsSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserLocationsSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
