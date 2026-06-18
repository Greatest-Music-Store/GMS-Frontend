import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCartAdd, tdesignHeartFilled, } from '@ng-icons/tdesign-icons';
import { FavoriteModel } from '../../models/favorite.model';


@Component({
  selector: 'app-favorite',
  imports: [DatePipe, NgIcon],
  templateUrl: './favorite.html',

  viewProviders: [
    provideIcons({
      tdesignCartAdd,
      tdesignHeartFilled,
    }),
  ],
})
export class Favorite {
  favoriteProducts: FavoriteModel[] = [];

  addToCart(productId: string): void {
    void productId;
  }

  removeFavorite(productId: string): void {
    void productId;
  }

  trackByProductId(_: number, product: FavoriteModel): string {
    return product.productId;
  }

  formatPrice(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
