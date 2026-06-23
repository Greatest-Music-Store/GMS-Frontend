import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModels } from '../../../models/product.model';
import { API_CONFIG } from '../../api.config';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiUrl = `${API_CONFIG.baseUrl}/api/product`;

  constructor(private http: HttpClient) { }

  getProductById(id: string): Observable<ProductModels> {
    return this.http.get<ProductModels>(
      `${API_CONFIG.baseUrl}/api/product/${id}`
    );
  }

  getAllProducts(): Observable<ProductModels[]> {
    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/product`
    );
  }

  searchProducts(filters: any) {
    let params = new HttpParams();

    if (filters.minPrice != null)
      params = params.set('minPrice', filters.minPrice);

    if (filters.maxPrice != null)
      params = params.set('maxPrice', filters.maxPrice);

    if (filters.rating != null) {
      params = params.set('rating', filters.rating);
    }
    if (filters.category != null)
      params = params.set('categoryName', filters.category);

    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/product`,
      { params }
    );
  }
}