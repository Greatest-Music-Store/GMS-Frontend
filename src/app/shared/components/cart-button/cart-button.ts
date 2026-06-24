import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCartAdd } from '@ng-icons/tdesign-icons';
import { CartService } from '../../../core/services/cart/cart';
import { CartModel } from '../../../models/cart.model';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../../../core/stores/auth.store';

@Component({
  selector: 'app-cart-button',
  imports: [NgIcon, RouterLink],
  viewProviders: [provideIcons({ tdesignCartAdd })],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.css',
})
export class CartButton {
  @Input({ required: true }) productId = '';
  @Input() quantity = 1;
  @Output() addedToCart = new EventEmitter<CartModel>();

  loading = signal(false);
  added = signal(false);
  showLoginPopup = signal(false);

  constructor(private cartService: CartService, private authStore: AuthStore) {}

  addToCart(): void {
    if (!this.productId || this.loading()) return;

    if (!this.authStore.isLogged()) {
      this.showLoginPopup.set(true);
      return;
    }

    this.loading.set(true);

    this.cartService.addToCart(this.productId, this.quantity).subscribe({
      next: (cartItem) => {
        this.added.set(true);
        this.addedToCart.emit(cartItem);
      },
      error: (error) => {
        console.error('Erro ao adicionar ao carrinho:', error);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  continueShopping(): void {
    this.added.set(false);
  }
}
