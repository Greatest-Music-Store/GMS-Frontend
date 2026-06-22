import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getProductsSmall(){
    return Promise.resolve(this.getProductById)
  }
}