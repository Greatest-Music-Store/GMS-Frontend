import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../../api.config';
import {
  FavoriteModel,
  FavoriteRequest,
  FavoriteResponse,
} from '../../../models/favorite.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private http: HttpClient) {}

  addFavorite(productId: string): Observable<FavoriteResponse> {
    const body: FavoriteRequest = { productId };

    return this.http.post<FavoriteResponse>(
      `${API_CONFIG.baseUrl}/api/Favorite`,
      body
    );
  }

  getFavorite(): Observable<FavoriteModel[]> {
    return this.http.get<FavoriteModel[]>(
      `${API_CONFIG.baseUrl}/api/Favorite/user`
    );
  }

  getFavoriteByProduct(productId: string): Observable<FavoriteModel> {
    return this.http.get<FavoriteModel>(
      `${API_CONFIG.baseUrl}/api/Favorite/${productId}`
    );
  }
}