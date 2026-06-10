import { Component } from '@angular/core';
import { tdesignMail, tdesignLockOn} from '@ng-icons/tdesign-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-login',
  imports: [NgIcon],
  templateUrl: './login.html',
  styleUrl: './login.css',
  viewProviders: [provideIcons({ tdesignLockOn, tdesignMail})],
})
export class Login {}