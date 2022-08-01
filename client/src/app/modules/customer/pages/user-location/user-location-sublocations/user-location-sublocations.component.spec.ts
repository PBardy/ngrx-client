import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationSublocationsComponent } from './user-location-sublocations.component';

describe('UserLocationSublocationsComponent', () => {
  let component: UserLocationSublocationsComponent;
  let fixture: ComponentFixture<UserLocationSublocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationSublocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationSublocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
