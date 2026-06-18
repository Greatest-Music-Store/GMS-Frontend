import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../api.config';
import { FavoriteModel } from '../../../models/favorite.model';


@Injectable({
  providedIn: 'root',
})
export class FavoriteService {

  constructor(private http: HttpClient) {}

  favorite( id: string){
    return this.http.get<FavoriteModel[]>(
      `${API_CONFIG.baseUrl}/api/Favorite/user/${id}`
    );
  }
}
