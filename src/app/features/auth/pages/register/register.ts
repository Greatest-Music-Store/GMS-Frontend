import { Component, OnInit } from '@angular/core';
import { tdesignMail, tdesignLockOn, tdesignUser, tdesignAssignmentUserFilled } from '@ng-icons/tdesign-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { cpfValidator } from 'cpf-cnpj-validator/angular';
import { matchValidator } from '../../../../core/validators/match.validator';
import { AuthService } from '../../../../core/services/auth/auth';
import { RegisterRequest } from '../../../../models/auth/register-request.model';



@Component({
  selector: 'app-register',
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './register.html',
  viewProviders: [provideIcons({ tdesignLockOn, tdesignMail, tdesignUser, tdesignAssignmentUserFilled })],
})
export class Register {
  registerForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required]
      }),

      email: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),

      password: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)]
      }),

      confirmPassword: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required]
      }),

      cpf: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required]
      }),

      phone: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    },
      {
        validators: [matchValidator('password', 'confirmPassword')]
      }
    );
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { confirmPassword, ...registerData } = this.registerForm.getRawValue();

    this.authService.register(registerData).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}