import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBiweeklyViewComponent } from './calendar-biweekly-view.component';

describe('CalendarBiweeklyViewComponent', () => {
  let component: CalendarBiweeklyViewComponent;
  let fixture: ComponentFixture<CalendarBiweeklyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarBiweeklyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarBiweeklyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
