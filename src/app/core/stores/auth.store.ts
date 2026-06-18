import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  token = signal<string | null>(null);

  isLogged = computed(() => this.token() !== null);

  constructor() {
    if (typeof window !== 'undefined') {
      this.token.set(localStorage.getItem('token'));
    }
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.token.set(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.token.set(null);
  }

}
