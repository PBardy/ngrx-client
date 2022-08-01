import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from '@interfaces/store/states.interface';
import { select, Store } from '@ngrx/store';
import { AuthService } from '@services/auth.service';
import { refreshSession } from '@store/actions/auth.actions';
import { prefetchUserTypes } from '@store/actions/user-type.actions';
import { skip, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>,
    private readonly authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.initStore();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initStore(): void {
    // Prefetch resources
    this.store.dispatch(prefetchUserTypes());
    this.store.dispatch(refreshSession());

    // Listen for auth state changes, to navigate to correct page
    this.store
      .pipe(
        skip(2),
        select((state) => state.auth)
      )
      .subscribe((auth) => {
        if (auth.token && auth.user) {
          // determine redirect based on user role
          return this.router.navigateByUrl(
            this.authService.getAuthRedirect(auth.user)
          );
        }

        return this.router.navigateByUrl('/');
      });
  }
}
