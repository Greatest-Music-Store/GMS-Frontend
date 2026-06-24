import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCart, tdesignHeart } from '@ng-icons/tdesign-icons';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../../../core/stores/auth.store';




@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  viewProviders: [provideIcons({ tdesignHeart, tdesignCart })],
})
export class Header {
  userMenuOpen = signal(false);

  constructor(public authStore: AuthStore) {}

  toggleUserMenu(): void {
    this.userMenuOpen.update((isOpen) => !isOpen);
  }

  logout(): void {
    this.authStore.logout();
    this.userMenuOpen.set(false);
  }
}
