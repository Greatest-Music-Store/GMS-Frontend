import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../api.config';
import { AuthResponse } from '../../../models/auth/auth-reponse.model';
import { LoginRequest } from '../../../models/auth/login-request.model';
import { RegisterRequest } from '../../../models/auth/register-request.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient)

  login(data: LoginRequest) {
    return this.http.post<AuthResponse>(
      `${API_CONFIG.baseUrl}/api/auth/login`,
      data
    );
  }

  register(data: RegisterRequest) {
    return this.http.post<AuthResponse>(
      `${API_CONFIG.baseUrl}/api/auth/register`,
      data
    );
  }

}
