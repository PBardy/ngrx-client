import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationActionsComponent } from './user-location-actions.component';

describe('UserLocationActionsComponent', () => {
  let component: UserLocationActionsComponent;
  let fixture: ComponentFixture<UserLocationActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
