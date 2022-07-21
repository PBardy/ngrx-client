import { FormControl } from '@angular/forms';

export enum CalendarMode {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  BIMONTHLY = 'BIMONTHLY',
}

export interface ICalendarControls {
  date: FormControl<Date | null>;
  mode: FormControl<CalendarMode | null>;
}

export interface ICalendarEvent<T> {
  endDate: Date;
  startDate: Date;
  data: T;
}
