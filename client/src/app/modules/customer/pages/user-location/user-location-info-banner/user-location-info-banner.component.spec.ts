import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationInfoBannerComponent } from './user-location-info-banner.component';

describe('UserLocationInfoBannerComponent', () => {
  let component: UserLocationInfoBannerComponent;
  let fixture: ComponentFixture<UserLocationInfoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationInfoBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
