import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCartAdd, tdesignHeartFilled, } from '@ng-icons/tdesign-icons';
import { FavoriteModel } from '../../models/favorite.model';
import { FavoriteService } from '../../core/services/favorite/favorite';
import { AuthStore } from '../../core/stores/auth.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  imports: [DatePipe, NgIcon, RouterLink],
  templateUrl: './favorite.html',

  viewProviders: [
    provideIcons({
      tdesignCartAdd,
      tdesignHeartFilled,
    }),
  ],
})
export class Favorite implements OnInit {
  favoriteProducts: FavoriteModel[] = [];
  loaded = false;

  constructor(
    private favoriteService: FavoriteService,
    private authStore: AuthStore
  ) { }

  ngOnInit(): void {
    const userId = this.authStore.id();

    console.log('USER ID:', userId);

    if (!userId) {
      console.log('Sem userId. Token não existe ou não foi decodificado.');
      return;
    }

    this.favoriteService.favorite(userId).subscribe({
      next: (products) => {
        console.log('FAVORITOS DA API:', products);
        this.favoriteProducts = products ?? [];
        this.loaded = true;
      },
      error: (error) => {
        console.log('ERRO FAVORITOS:', error);
        this.favoriteProducts = [];
        this.loaded = true;
      }
    });
  }

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