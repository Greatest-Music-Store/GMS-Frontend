import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../core/services/cart/cart';
import { switchMap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, DecimalPipe, CurrencyPipe],
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

  constructor(private cartItemService: CartService) { }

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

  decreaseQuantity(item: CartModel): void {
    if (item.quantity <= 1) {
      this.remove(item.productId);
      return;
    }

    this.cartItemService.removeFromCart(item.productId).pipe(
      switchMap(() => this.cartItemService.addToCart(item.productId, item.quantity - 1))
    ).subscribe({
      next: () => {
        this.loadCart();
      },
      error: (err) => {
        console.error('Erro ao reduzir quantidade:', err);
      }
    });
  }

  mainImage(item: CartModel): string {
    return item.imageUrls?.[0] ?? '';
  }


  finalizarCompra() {
    const requests = this.cartItems().map(item =>
      this.cartItemService.removeFromCart(item.productId)
    );

    forkJoin(requests).subscribe(() => {
      this.cartItems.set([]);
    });
  }
}
