import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsActionsComponent } from './user-settings-actions.component';

describe('UserSettingsActionsComponent', () => {
  let component: UserSettingsActionsComponent;
  let fixture: ComponentFixture<UserSettingsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
