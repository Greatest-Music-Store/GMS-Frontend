import { Component, signal } from '@angular/core';
import { ProductModels } from '../../../../models/product.model';
import { ProductsService } from '../../../../core/services/products/products';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { FavoriteButton } from '../../../../shared/components/favorite-button/favorite-button';
@Component({
  selector: 'app-search',
  imports: [ɵInternalFormsSharedModule, FormsModule, FavoriteButton],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  products = signal<ProductModels[]>([]);
  loaded = signal(false);
  minPrice: number | null = null;
  maxPrice: number | null = null;
  category: string | null = null;
  resetKey = 0;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.applyFilters();
  }
  
  private loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loaded.set(true);
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.products.set([]);
        this.loaded.set(true);
      }
    });
  }

  applyFilters(): void {
    this.productService.searchProducts({
      category: this.category,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    }).subscribe({
      next: (res) => this.products.set(res),
      error: console.error
    });
  }

  toggleCategory(category: string, event: any) {
      if (event.target.checked) {
      this.category = category;
    } else {
      this.category = null;
    }
  }

  cleanFilter(): void {
    this.resetKey++;

    this.category = null;
    this.minPrice = null;
    this.maxPrice = null;

    this.productService.searchProducts({
      category: null,
      minPrice: null,
      maxPrice: null,
    }).subscribe({
      next: (res) => this.products.set(res),
      error: console.error
    });
  }
}
