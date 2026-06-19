import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../core/services/cart/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cart.html',
})
export class Cart implements OnInit {
  cartItems = signal<CartModel[]>([]);
  loaded = signal(false);

  total = computed(() =>
    this.cartItems().reduce(
      (acc, item) => acc + (item.price ?? 0) * item.quantity,
      0
    )
  );

  constructor(private cartItemService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItemService.getUserCart().subscribe({
      next: (items) => {
        this.cartItems.set(items);
        this.loaded.set(true);
      },
      error: (err) => {
        console.error('Erro ao carregar carrinho:', err);
        this.loaded.set(true);
      }
    });
  }

  remove(productId: string): void {
    this.cartItemService.removeFromCart(productId).subscribe({
      next: () => {
        this.cartItems.update(items =>
          items.filter(item => item.productId !== productId)
        );
      },
      error: (err) => {
        console.error('Erro ao remover produto:', err);
      }
    });
  }

  increaseQuantity(productId: string): void {
    this.cartItemService.addToCart(productId, 1).subscribe({
      next: () => {
        this.loadCart();
      },
      error: (err) => {
        console.error('Erro ao adicionar quantidade:', err);
      }
    });
  }
}
