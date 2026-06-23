import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignHeart, tdesignHeartFilled } from '@ng-icons/tdesign-icons';
import { FavoriteService } from '../../../core/services/favorite/favorite';
@Component({
  selector: 'app-favorite-button',
  imports: [NgIcon],
  viewProviders: [provideIcons({tdesignHeart, tdesignHeartFilled})],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.css',
})
export class FavoriteButton implements OnInit {
  @Input({ required: true }) productId = '';
  @Input() initialFavorite = false;
  @Output() favoriteChanged = new EventEmitter<boolean>();

  isFavorite = signal(false);
  loading = signal(false);

  constructor(private favoriteService: FavoriteService){}

  ngOnInit(): void {
    this.isFavorite.set(this.initialFavorite);

    if (!this.productId || this.initialFavorite) return;

    this.favoriteService.getFavoriteByProduct(this.productId).subscribe({
      next: () => {
        this.isFavorite.set(true);
      },
      error: () => {
        this.isFavorite.set(false);
      },
    });
  }

  toggleFavorite(): void {
    if (!this.productId || this.loading()) return;

    this.loading.set(true);

    this.favoriteService.addFavorite(this.productId).subscribe({
      next: (response) => {
        this.isFavorite.set(response.isFavorite);
        this.favoriteChanged.emit(response.isFavorite);
      },
      error: (error) => {
        console.error('Erro ao alternar favorito:', error);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
