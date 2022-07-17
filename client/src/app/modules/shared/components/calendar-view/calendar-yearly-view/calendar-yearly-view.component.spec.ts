import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarYearlyViewComponent } from './calendar-yearly-view.component';

describe('CalendarYearlyViewComponent', () => {
  let component: CalendarYearlyViewComponent;
  let fixture: ComponentFixture<CalendarYearlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarYearlyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarYearlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
