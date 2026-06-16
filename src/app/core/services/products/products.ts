import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModels } from '../../../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiUrl = 'http://192.168.1.76:5041/api/product';

  constructor(private http: HttpClient) { }

  getProductById(id: string): Observable<ProductModels> {
  return this.http.get<ProductModels>(
    `http://192.168.1.76:5041/api/product/${id}`
  );
}
}