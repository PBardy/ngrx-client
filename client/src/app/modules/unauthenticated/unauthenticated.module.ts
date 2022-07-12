import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { SharedModule } from '@modules/shared/shared.module';
import { MaterialModule } from '@modules/material/material.module';
import { LandingUserTypeCardComponent } from './pages/landing/landing-user-type-card/landing-user-type-card.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { GoogleButtonComponent } from './components/social-buttons/google-button/google-button.component';
import { FacebookButtonComponent } from './components/social-buttons/facebook-button/facebook-button.component';

@NgModule({
  declarations: [
    LandingComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ConfirmEmailComponent,
    LandingUserTypeCardComponent,
    SocialButtonsComponent,
    GoogleButtonComponent,
    FacebookButtonComponent,
  ],
  imports: [
    CommonModule,
    UnauthenticatedRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class UnauthenticatedModule {}
