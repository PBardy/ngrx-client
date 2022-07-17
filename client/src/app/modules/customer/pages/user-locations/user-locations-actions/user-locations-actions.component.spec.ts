import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationsActionsComponent } from './user-locations-actions.component';

describe('UserLocationsActionsComponent', () => {
  let component: UserLocationsActionsComponent;
  let fixture: ComponentFixture<UserLocationsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationsActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
