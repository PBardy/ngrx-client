import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthlyViewComponent } from './calendar-monthly-view.component';

describe('CalendarMonthlyViewComponent', () => {
  let component: CalendarMonthlyViewComponent;
  let fixture: ComponentFixture<CalendarMonthlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMonthlyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMonthlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
