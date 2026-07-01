import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginDialogService } from '../../../core/services/login-dialog/login-dialog-service';

@Component({
  selector: 'app-login-required-dialog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-required-dialog.html'
})
export class LoginRequiredDialog {

  constructor(public dialog: LoginDialogService) {}

}