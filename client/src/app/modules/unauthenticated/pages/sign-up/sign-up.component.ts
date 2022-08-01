import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRole } from '@interfaces/models/user-type.interface';
import { ISignUpRequest } from '@interfaces/requests/sign-up.request.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { signUp } from '@store/actions/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  private readonly subscriptions = new Subscription();
  private userType: string;

  public readonly form = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
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

  public signUp(): void {
    if (this.form.invalid) return;

    this.store.dispatch(signUp(this.form.value as ISignUpRequest));
  }

  public signIn(): void {
    this.router.navigate(['/sign-in', { state: this.userType }]);
  }

  @HostListener('document:keypress', ['$event'])
  public autoSignUp(event: KeyboardEvent): void {
    switch (event.key.toUpperCase()) {
      case 'C':
        this.form.patchValue({
          email: 'customer@gmail.com',
          password: 'password123',
          firstName: 'Philip',
          lastName: 'Bardy',
          userType: UserRole.CUSTOMER,
        });

        this.signUp();
        break;
      case 'S':
        this.form.patchValue({
          email: 'seller@gmail.com',
          password: 'password123',
          firstName: 'Philip',
          lastName: 'Bardy',
          userType: UserRole.SELLER,
        });

        this.signUp();
        break;
      case 'A':
        this.form.patchValue({
          email: 'admin@gmail.com',
          password: 'password123',
          firstName: 'Philip',
          lastName: 'Bardy',
          userType: UserRole.ADMIN,
        });

        this.signUp();
        break;
    }
  }
}
