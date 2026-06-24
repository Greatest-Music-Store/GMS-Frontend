import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartModel } from '../../../models/cart.model';
import { API_CONFIG } from '../../api.config';
import { ProductModels } from '../../../models/product.model';

type CartResponseItem = Partial<CartModel> & {
  product?: ProductModels;
  Product?: ProductModels;
  ProductId?: string;
  Quantity?: number;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${API_CONFIG.baseUrl}/api/CartItem`;

  constructor(private http: HttpClient) {}

  addToCart(productId: string, quantity: number = 1): Observable<CartModel> {
    return this.http.post(this.apiUrl, {
      productId,
      quantity
    }, { responseType: 'text' }).pipe(
      map((response) => this.normalizeItem(this.parseResponse<CartResponseItem>(response, { productId, quantity })))
    );
  }

  getCartItem(productId: string): Observable<CartModel> {
    return this.http.get(`${this.apiUrl}/${productId}`, { responseType: 'text' }).pipe(
      map((response) => this.normalizeItem(this.parseResponse<CartResponseItem>(response, { productId, quantity: 0 })))
    );
  }

  getUserCart(): Observable<CartModel[]> {
    return this.http.get(`${this.apiUrl}/user`, { responseType: 'text' }).pipe(
      map((response) => this.parseResponse<CartResponseItem[]>(response, [])),
      map((items) => items.map((item) => this.normalizeItem(item)))
    );
  }

  removeFromCart(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

  private parseResponse<T>(response: string, fallback: T): T {
    if (!response) return fallback;

    try {
      return JSON.parse(response) as T;
    } catch {
      return fallback;
    }
  }

  private normalizeItem(item: CartResponseItem): CartModel {
    const product = item.product ?? item.Product;

    return {
      productId: item.productId ?? item.ProductId ?? product?.productId ?? '',
      name: item.name ?? product?.name ?? 'Produto',
      brand: item.brand ?? product?.brand ?? '',
      price: item.price ?? product?.price ?? 0,
      imageUrls: item.imageUrls ?? product?.imageUrls ?? [],
      description: item.description ?? product?.description ?? '',
      rating: item.rating ?? product?.rating ?? 0,
      quantity: item.quantity ?? item.Quantity ?? 0,
      categoryName: item.categoryName ?? product?.categoryName ?? '',
      subcategoryName: item.subcategoryName ?? product?.subcategoryName ?? '',
      feedbacks: item.feedbacks ?? product?.feedbacks ?? [],
      categoryID: item.categoryID ?? product?.categoryID ?? '',
      subCategoryId: item.subCategoryId ?? product?.subCategoryId ?? '',
    };
  }
}
