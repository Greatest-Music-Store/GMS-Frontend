import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModels } from '../../../models/product.model';
import { API_CONFIG } from '../../api.config';

export interface ProductFilters {
  Name?: string;
  Brand?: string;
  CategoryId?: string;
  SubcategoryId?: string;
  MinPrice?: number;
  MaxPrice?: number;
  SortBy?: string;
  CategoryName?: string;
  SubcategoryName?: string;
  search?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiUrl = `${API_CONFIG.baseUrl}/api/Product`;

  constructor(private http: HttpClient) { }

  getProducts(filters: ProductFilters = {}): Observable<ProductModels[]> {
    let params = new HttpParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, String(value));
      }
    });

    return this.http.get<ProductModels[]>(this.apiUrl, { params });
  }

  getProductById(id: string): Observable<ProductModels> {
    return this.http.get<ProductModels>(`${this.apiUrl}/${id}`);
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductById);
  }
}
