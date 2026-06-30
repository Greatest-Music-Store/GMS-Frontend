import { Component, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCartAdd, tdesignHeartFilled } from '@ng-icons/tdesign-icons';
import { FavoriteService } from '../../core/services/favorite/favorite';
import { ProductModels } from '../../models/product.model';
import { FavoriteModel } from '../../models/favorite.model';
import { FavoriteButton } from '../../shared/components/favorite-button/favorite-button';
import { RouterLink } from '@angular/router';
import { CartButton } from '../../shared/components/cart-button/cart-button';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-favorite',
  imports: [NgIcon, FavoriteButton, RouterLink, CartButton, CurrencyPipe],
  templateUrl: './favorite.html',
  viewProviders: [
    provideIcons({
      tdesignCartAdd, tdesignHeartFilled,
    }),],
})
export class Favorite implements OnInit {
  favoriteProducts = signal<ProductModels[]>([]);
  loaded = signal(false);

  constructor(private favoriteService: FavoriteService) { }

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

  onFavoriteChanged(productId: string, isFavorite: boolean): void {
    if (isFavorite) return;

    this.favoriteProducts.update((products) =>
      products.filter((product) => product.productId !== productId)
    );
  }

  trackByProductId(_: number, product: ProductModels): string {
    return product.productId;
  }

  mainImage(product: ProductModels): string {
    return product.imageUrls?.[0] ?? '';
  }
}
