import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificationSettingsComponent } from './user-notification-settings.component';

describe('UserNotificationSettingsComponent', () => {
  let component: UserNotificationSettingsComponent;
  let fixture: ComponentFixture<UserNotificationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotificationSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
