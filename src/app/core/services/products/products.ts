import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductModels, ProductRequest } from '../../../models/product.model';
import { API_CONFIG } from '../../api.config';
import { ProductFilters } from '../../../models/product.model';
import { CategoryModel, SubcategoryModel } from '../../../models/product.model';



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

    return this.http.get(this.apiUrl, { params, responseType: 'text' }).pipe(
      map((response) => this.parseResponse<ProductModels[]>(response, []))
    );
  }
  

  getProductById(id: string): Observable<ProductModels> {
    return this.http.get(`${this.apiUrl}/${id}`, { responseType: 'text' }).pipe(
      map((response) => this.parseResponse<ProductModels | null>(response, null)),
      map((product) => {
        if (!product) {
          throw new Error('Produto não encontrado.');
        }

        return product;
      })
    );
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductById);
  }

  getOffers(): Observable<ProductModels[]> {
    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/product/offers`
    );
  }

  getRecommended(): Observable<ProductModels[]> {
    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/product/recommended`
    );
  }

  getAllProducts(): Observable<ProductModels[]> {
    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/product`
    );
  }

  searchProducts(filters: any, search: string) {
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

    if (search != null)
      params = params.set('search', search);

    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/product`,
      { params }
    );
  }

  deleteProduct(productId: string) {
    return this.http.delete<ProductModels>(
      `${API_CONFIG.baseUrl}/api/product/${productId}`
    )
  }


  postProduct(data: ProductRequest) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/api/product`,
      data
    )

  }

  getCategories() {
    return this.http.get<CategoryModel[]>(
      `${API_CONFIG.baseUrl}/api/category`
    );
  }

  getSubcategories(categoryId: string) {
  return this.http.get<SubcategoryModel[]>(
    `${API_CONFIG.baseUrl}/api/Subcategory`,
    {
      params: {
        id: categoryId
      }
    }
  );
}

  private parseResponse<T>(response: string, fallback: T): T {
    if (!response) return fallback;

    try {
      return JSON.parse(response) as T;
    } catch {
      return fallback;
    }
  }
}
