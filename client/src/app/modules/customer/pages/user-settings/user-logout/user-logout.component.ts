import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { signOut } from '@store/actions/auth.actions';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss'],
})
export class UserLogoutComponent implements OnInit {
  public constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public signOut(): void {
    this.store.dispatch(signOut({ reason: 'USER_ACTION' }));
  }
}
