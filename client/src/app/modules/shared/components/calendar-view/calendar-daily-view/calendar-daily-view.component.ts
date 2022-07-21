import { ViewportScroller } from '@angular/common';
import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-calendar-daily-view',
  templateUrl: './calendar-daily-view.component.html',
  styleUrls: ['./calendar-daily-view.component.scss'],
})
export class CalendarDailyViewComponent implements OnInit, AfterViewInit {
  @Input() public date: Date = new Date();

  public constructor(private readonly scroller: ViewportScroller) {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    document.getElementById(this.getId(this.currentHour))?.scrollIntoView();
  }

  public get startOfDay(): Date {
    const date = this.date;
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    return date;
  }

  public get currentHour(): number {
    return new Date().getHours();
  }

  public get hours(): Array<Date> {
    return new Array(24).fill(this.startOfDay).map((date: Date, i) => {
      const d = new Date(date);
      d.setHours(date.getHours() + i);
      return d;
    });
  }

  public getId(hour: number): string {
    return 'hour-' + hour;
  }

  public isCurrentHour(hour: Date): boolean {
    return hour.getHours() === this.currentHour;
  }
}
