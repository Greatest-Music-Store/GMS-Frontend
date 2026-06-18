import { Injectable, signal, computed } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

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

  id(): string | null {
    const token = this.token();

    if (!token) return null;

    const decoded: any = jwtDecode(token);

    return decoded[
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
    ];
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
