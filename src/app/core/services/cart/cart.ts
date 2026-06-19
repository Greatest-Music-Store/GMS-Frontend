import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartModel } from '../../../models/cart.model';
import { API_CONFIG } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${API_CONFIG.baseUrl}/api/CartItem`;

  constructor(private http: HttpClient) {}

  addToCart(productId: string, quantity: number = 1): Observable<CartModel> {
    return this.http.post<CartModel>(this.apiUrl, {
      productId,
      quantity
    });
  }

  getCartItem(productId: string): Observable<CartModel> {
    return this.http.get<CartModel>(`${this.apiUrl}/${productId}`);
  }

  getUserCart(): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`${this.apiUrl}/user`);
  }

  removeFromCart(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
