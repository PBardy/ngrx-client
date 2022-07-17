import { Component, Input, OnInit } from '@angular/core';
import {
  CalendarMode,
  ICalendarEvent,
} from '@modules/shared/interfaces/calendar.interface';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
  @Input() public mode: CalendarMode = CalendarMode.DAILY;
  @Input() public events: Array<ICalendarEvent<any>> = [];

  constructor() {}

  ngOnInit(): void {}
}
