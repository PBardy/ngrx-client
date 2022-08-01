import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { signOut } from '@store/actions/auth.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() public drawer: MatDrawer;

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}

  public goToMyProfile(): void {}

  public goToMySettings(): void {}

  public goToChangeMyPreferences(): void {}

  public signOut(): void {
    this.store.dispatch(signOut({ reason: 'USER_ACTION' }));
  }
}
