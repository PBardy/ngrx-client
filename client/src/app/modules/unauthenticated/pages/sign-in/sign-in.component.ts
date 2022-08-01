import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRole } from '@interfaces/models/user-type.interface';
import { ISignInRequest } from '@interfaces/requests/sign-in.request.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { signIn } from '@store/actions/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  private readonly subscriptions = new Subscription();
  private userType: string;

  public readonly form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    userType: new FormControl(UserRole.CUSTOMER),
  });

  public readonly authState$ = this.store.select((state) => state.auth);

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly store: Store<IAppState>,
    private readonly snackbar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.initRoute();
    this.initAuthState();
  }

  private initRoute(): void {
    const snapshot = this.route.snapshot.params;
    if (snapshot.hasOwnProperty('state')) {
      this.userType = snapshot['state'];
      this.form.controls.userType.patchValue(snapshot['state']);
    }
  }

  private initAuthState(): void {
    this.subscriptions.add(
      this.authState$.subscribe((state) => {
        if (state.error) {
          const message = state.message ?? 'An unknown error occurred';
          this.snackbar.open(message, 'Cancel');
        }
      })
    );
  }

  public signIn(): void {
    if (this.form.invalid) return;

    this.store.dispatch(signIn(this.form.value as ISignInRequest));
  }

  public signUp(): void {
    this.router.navigate(['/sign-up', { state: this.userType }]);
  }

  @HostListener('document:keypress', ['$event'])
  public autoSignIn(event: KeyboardEvent): void {
    switch (event.key.toUpperCase()) {
      case 'C':
        this.form.patchValue({
          email: 'customer@gmail.com',
          password: 'password123',
        });

        this.signIn();
        break;
      case 'S':
        this.form.patchValue({
          email: 'seller@gmail.com',
          password: 'password123',
        });

        this.signIn();
        break;
      case 'A':
        this.form.patchValue({
          email: 'admin@gmail.com',
          password: 'password123',
        });

        this.signIn();
        break;
    }
  }
}
