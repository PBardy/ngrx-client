import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CalendarMode,
  ICalendarControls,
} from '@modules/shared/interfaces/calendar.interface';
import { IOption } from '@modules/shared/interfaces/option.interface';

@Component({
  selector: 'app-calendar-controls',
  templateUrl: './calendar-controls.component.html',
  styleUrls: ['./calendar-controls.component.scss'],
})
export class CalendarControlsComponent implements OnInit {
  @Input() public form: FormGroup<ICalendarControls>;

  public readonly modes: Array<IOption<CalendarMode>> = [
    { label: 'Day View', value: CalendarMode.DAILY },
    { label: 'Week View', value: CalendarMode.WEEKLY },
    { label: 'Month View', value: CalendarMode.MONTHLY },
  ];

  public constructor() {}

  public ngOnInit(): void {}
}
