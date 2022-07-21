import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailSettingsComponent } from './user-email-settings.component';

describe('UserEmailSettingsComponent', () => {
  let component: UserEmailSettingsComponent;
  let fixture: ComponentFixture<UserEmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
