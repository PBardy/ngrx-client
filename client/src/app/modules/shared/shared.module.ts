import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarControlsComponent } from './components/calendar-controls/calendar-controls.component';
import { MaterialModule } from '@modules/material/material.module';
import { CalendarDailyViewComponent } from './components/calendar-view/calendar-daily-view/calendar-daily-view.component';
import { CalendarMonthlyViewComponent } from './components/calendar-view/calendar-monthly-view/calendar-monthly-view.component';
import { CalendarBiweeklyViewComponent } from './components/calendar-view/calendar-biweekly-view/calendar-biweekly-view.component';
import { BimonthlyViewComponent } from './components/calendar-view/bimonthly-view/bimonthly-view.component';
import { CalendarYearlyViewComponent } from './components/calendar-view/calendar-yearly-view/calendar-yearly-view.component';
import { DisplayModeComponent } from './display-mode/display-mode.component';
import { CalendarWeeklyViewComponent } from './components/calendar-view/calendar-weekly-view/calendar-weekly-view.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    CalendarViewComponent,
    CalendarControlsComponent,
    CalendarDailyViewComponent,
    CalendarMonthlyViewComponent,
    CalendarBiweeklyViewComponent,
    BimonthlyViewComponent,
    CalendarYearlyViewComponent,
    DisplayModeComponent,
    CalendarWeeklyViewComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CalendarViewComponent,
    CalendarControlsComponent,
    DisplayModeComponent,
    PaginatorComponent,
  ],
})
export class SharedModule {}
