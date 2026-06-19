import { Injectable } from '@angular/core';
import { CartModel } from '../../../models/cart.model';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../api.config';
import { ProductModels } from '../../../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private http: HttpClient) { }

  postCartItem(id: string, quantity: number) {
    return this.http.post<CartModel>(
      `${API_CONFIG.baseUrl}/api/CartItem`,
      {
        id,
        quantity
      })
  }
  getProductCart(idUser: string, idProduct: string){
    return this.http.get<ProductModels>(
      `${API_CONFIG.baseUrl}/api/CartItem/${idUser}/${idProduct}`
    )
  }
  getCart(idUser: string){
    return this.http.get<CartModel[]>(
      `${API_CONFIG.baseUrl}/api/CartItem/user/${idUser}`
    )
  }


}

