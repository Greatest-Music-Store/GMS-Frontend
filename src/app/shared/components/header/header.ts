import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignCart, tdesignHeart } from '@ng-icons/tdesign-icons';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../../../core/stores/auth.store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductModels } from '../../../models/product.model';
import { ProductsService } from '../../../core/services/products/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  viewProviders: [provideIcons({ tdesignHeart, tdesignCart })],
})
export class Header {
  userMenuOpen = signal(false);
  searchControl = new FormControl('');
  suggestions: ProductModels[] = [];

  constructor(public authStore: AuthStore, private productService: ProductsService, private router: Router) {}

  toggleUserMenu(): void {
    this.userMenuOpen.update((isOpen) => !isOpen);
  }

  search(): void {
    const term = this.searchControl.value?.trim();

    if (!term) return;

    this.router.navigate(['/search'], {
      queryParams: {
        search: term
      }
    });
  }

  selectSuggestion(product: ProductModels): void {
    this.router.navigate(['/produto', product.productId]);
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.productService.searchProducts({},
          term ?? ''
        )
      )
    ).subscribe(products => {
      this.suggestions = products.slice(0, 5);
    });
  }

  logout(): void {
    this.authStore.logout();
    this.userMenuOpen.set(false);
  }
}
