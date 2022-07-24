import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserLocationsSnackbarComponent } from './add-user-locations-snackbar.component';

describe('AddUserLocationsSnackbarComponent', () => {
  let component: AddUserLocationsSnackbarComponent;
  let fixture: ComponentFixture<AddUserLocationsSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserLocationsSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserLocationsSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
