import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../api.config';
import { FavoriteModel, FavoriteRequest, FavoriteResponse } from '../../../models/favorite.model';
import { Observable } from 'rxjs';
import { ProductModels } from '../../../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  addFavorite(productId: string): Observable<FavoriteResponse> {
    const body: FavoriteRequest = { productId };

    return this.http.post<FavoriteResponse>(
      `${API_CONFIG.baseUrl}/api/Favorite`,
      body
    );
  }

  getFavorite() {
    return this.http.get<ProductModels[]>(
      `${API_CONFIG.baseUrl}/api/Favorite/user`
    );
  }

  getFavoriteByProduct(userId: string, productId: string): Observable<FavoriteModel> {
    return this.http.get<FavoriteModel>(
      `${API_CONFIG.baseUrl}/api/Favorite/${userId}/${productId}`
    );
  }
}
