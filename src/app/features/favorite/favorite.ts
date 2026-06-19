import { Component, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCartAdd, tdesignHeartFilled } from '@ng-icons/tdesign-icons';

import { FavoriteService } from '../../core/services/favorite/favorite';
import { ProductModels } from '../../models/product.model';
import { FavoriteModel } from '../../models/favorite.model';

@Component({
  selector: 'app-favorite',
  imports: [NgIcon],
  templateUrl: './favorite.html',
  viewProviders: [
    provideIcons({
      tdesignCartAdd,
      tdesignHeartFilled,
    }),
  ],
})
export class Favorite implements OnInit {
  favoriteProducts = signal<ProductModels[]>([]);
  loaded = signal(false);

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    this.favoriteService.getFavorite().subscribe({
      next: (favorites: FavoriteModel[]) => {
        const products = favorites
          .map((favorite) => favorite.product)
          .filter((product): product is ProductModels => !!product);

        this.favoriteProducts.set(products);
        this.loaded.set(true);
      },
      error: (error) => {
        console.error('Erro ao carregar favoritos:', error);
        this.favoriteProducts.set([]);
        this.loaded.set(true);
      },
    });
  }

  addToCart(productId: string): void {
    console.log('Adicionar ao carrinho:', productId);
  }

  removeFavorite(productId: string): void {
    this.favoriteService.addFavorite(productId).subscribe({
      next: () => {
        this.favoriteProducts.update((products) =>
          products.filter((product) => product.productId !== productId)
        );
      },
      error: (error) => {
        console.error('Erro ao remover favorito:', error);
      },
    });
  }

  trackByProductId(_: number, product: ProductModels): string {
    return product.productId;
  }

  mainImage(product: ProductModels): string {
    return product.imageUrls?.[0] ?? '';
  }
}