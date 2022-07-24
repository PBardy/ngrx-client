import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserLocationSnackbarComponent } from './add-user-location-snackbar.component';

describe('AddUserLocationSnackbarComponent', () => {
  let component: AddUserLocationSnackbarComponent;
  let fixture: ComponentFixture<AddUserLocationSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserLocationSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserLocationSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
