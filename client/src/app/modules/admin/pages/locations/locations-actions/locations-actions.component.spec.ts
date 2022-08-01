import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsActionsComponent } from './locations-actions.component';

describe('LocationsActionsComponent', () => {
  let component: LocationsActionsComponent;
  let fixture: ComponentFixture<LocationsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
