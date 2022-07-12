import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUserTypeCardComponent } from './landing-user-type-card.component';

describe('LandingUserTypeCardComponent', () => {
  let component: LandingUserTypeCardComponent;
  let fixture: ComponentFixture<LandingUserTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingUserTypeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingUserTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
