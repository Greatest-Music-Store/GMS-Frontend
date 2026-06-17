import { Component } from '@angular/core';
import { tdesignMail, tdesignLockOn } from '@ng-icons/tdesign-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth';
import { LoginRequest } from '../../../../models/auth/login-request.model';
@Component({
  selector: 'app-login',
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './login.html',
  viewProviders: [provideIcons({ tdesignLockOn, tdesignMail })],
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    })
  });
  constructor(
    private authService: AuthService
  ) { }

  login() {
    if (this.loginForm.invalid) return;

    const loginData: LoginRequest = this.loginForm.getRawValue();


    this.authService.login(loginData)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}