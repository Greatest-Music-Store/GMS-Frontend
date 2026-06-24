import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignMail } from '@ng-icons/tdesign-icons';
@Component({
  selector: 'app-forgot-password',
  imports: [NgIcon],
  templateUrl: './forgot-password.html',
  viewProviders: provideIcons({tdesignMail})
})
export class ForgotPassword {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    })
  })

  forgotPassword(){

  }
}