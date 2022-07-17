import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectAllNotifications } from '@store/selectors/notification.selectors';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss'],
})
export class UserNotificationsComponent implements OnInit {
  public readonly notifications$ = this.store.select(selectAllNotifications);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
