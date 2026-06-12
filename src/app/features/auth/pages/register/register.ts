import { Component } from '@angular/core';
import { tdesignMail, tdesignLockOn,  tdesignUser, tdesignAssignmentUserFilled } from '@ng-icons/tdesign-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-register',
  imports: [NgIcon],
  templateUrl: './register.html',
  viewProviders: [provideIcons({ tdesignLockOn, tdesignMail,  tdesignUser, tdesignAssignmentUserFilled })],
})
export class Register {}
