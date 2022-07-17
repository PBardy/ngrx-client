import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarMode } from '@modules/shared/interfaces/calendar.interface';

@Component({
  selector: 'app-perishable-products-calendar-widget',
  templateUrl: './perishable-products-calendar-widget.component.html',
  styleUrls: ['./perishable-products-calendar-widget.component.scss'],
})
export class PerishableProductsCalendarWidgetComponent implements OnInit {
  public readonly form = new FormGroup({
    mode: new FormControl<CalendarMode>(CalendarMode.DAILY, [
      Validators.required,
    ]),
  });

  public constructor() {}

  public ngOnInit(): void {}

  public get mode(): CalendarMode {
    return this.form.controls.mode.value!;
  }
}
