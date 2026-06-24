import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCart, tdesignHeart, tdesignUserCircle } from '@ng-icons/tdesign-icons';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../../../core/stores/auth.store';




@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink],
  templateUrl: './header.html',
  viewProviders: [provideIcons({ tdesignHeart, tdesignCart, tdesignUserCircle})],
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
