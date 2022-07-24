import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { signOut } from '@store/actions/auth.actions';
import { selectCart } from '@store/selectors/cart.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() public drawer: MatDrawer;

  public readonly cart$ = this.store.select(selectCart);

  public constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>
  ) {}

  public ngOnInit(): void {}

  public goToMyProfile(): void {
    this.router.navigate(['/user/customer/my/settings']);
  }

  public goToMySettings(): void {
    this.router.navigate(['/user/customer/my/settings']);
  }

  public goToChangeMyPreferences(): void {
    this.router.navigate(['/user/customer/my/settings']);
  }

  public signOut(): void {
    this.store.dispatch(signOut({ reason: 'USER_CHOICE' }));
  }
}
