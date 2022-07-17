import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificationsEmptyComponent } from './user-notifications-empty.component';

describe('UserNotificationsEmptyComponent', () => {
  let component: UserNotificationsEmptyComponent;
  let fixture: ComponentFixture<UserNotificationsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotificationsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNotificationsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
