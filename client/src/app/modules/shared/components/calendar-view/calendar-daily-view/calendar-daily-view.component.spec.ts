import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDailyViewComponent } from './calendar-daily-view.component';

describe('CalendarDailyViewComponent', () => {
  let component: CalendarDailyViewComponent;
  let fixture: ComponentFixture<CalendarDailyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDailyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarDailyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
