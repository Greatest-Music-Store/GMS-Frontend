import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignHeart, tdesignCart, tdesignUserCircle, tdesignMapLocationFilled } from '@ng-icons/tdesign-icons';




@Component({
  selector: 'app-header',
  imports: [NgIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  viewProviders: [provideIcons({ tdesignHeart, tdesignCart, tdesignUserCircle, tdesignMapLocationFilled })],
})
export class Header {}
