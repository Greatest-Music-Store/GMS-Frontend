import { Injectable, signal, computed } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  token = signal<string | null>(null);

  isLogged = computed(() => this.token() !== null);
  userName = computed(() => {
    const decoded = this.decodedToken();

    return decoded?.['name']
      ?? decoded?.['unique_name']
      ?? decoded?.['given_name']
      ?? decoded?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
      ?? null;
  });

  constructor() {
    this.token.set(this.storage()?.getItem('token') ?? null);
  }

  id(): string | null {
    const decoded = this.decodedToken();

    return decoded?.[
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
    ] ?? null;
  }

  login(token: string) {
    this.storage()?.setItem('token', token);
    this.token.set(token);
  }

  logout() {
    this.storage()?.removeItem('token');
    this.token.set(null);
  }

  private storage(): Storage | null {
    if (typeof window === 'undefined') return null;

    return typeof window.localStorage?.getItem === 'function'
      ? window.localStorage
      : null;
  }

  private decodedToken(): Record<string, string> | null {
    const token = this.token();

    if (!token) return null;

    try {
      return jwtDecode<Record<string, string>>(token);
    } catch {
      return null;
    }
  }
}
