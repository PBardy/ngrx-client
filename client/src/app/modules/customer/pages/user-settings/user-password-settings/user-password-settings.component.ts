import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-password-settings',
  templateUrl: './user-password-settings.component.html',
  styleUrls: ['./user-password-settings.component.scss'],
})
export class UserPasswordSettingsComponent implements OnInit {
  public readonly form = new FormGroup({
    currentPassword: new FormControl<string>('', [Validators.required]),
    newPassword: new FormControl<string>('', [Validators.required]),
    confirmNewPassword: new FormControl<string>('', [Validators.required]),
  });

  public showPasswords = false;

  constructor() {}

  ngOnInit(): void {}
}
