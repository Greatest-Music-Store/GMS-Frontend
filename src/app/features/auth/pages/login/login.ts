import { Component } from '@angular/core';
import { tdesignMail, tdesignLockOn} from '@ng-icons/tdesign-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgIcon],
  templateUrl: './login.html',
  viewProviders: [provideIcons({ tdesignLockOn, tdesignMail})],
})
export class Login {
  
}