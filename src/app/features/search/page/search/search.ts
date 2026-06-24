import { Component, signal } from '@angular/core';
import { ProductModels } from '../../../../models/product.model';
import { ProductsService } from '../../../../core/services/products/products';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { FavoriteButton } from '../../../../shared/components/favorite-button/favorite-button';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [ɵInternalFormsSharedModule, FormsModule, FavoriteButton, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  products = signal<ProductModels[]>([]);
  loaded = signal(false);
  minPrice: number | null = null;
  maxPrice: number | null = null;
  category: string | null = null;
  searchTerm: string | null = null;
  resetKey = 0;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] ?? null;
      this.searchTerm = params['search'] ?? null;
      console.log(this.searchTerm);
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.productService.searchProducts(
      {
        category: this.category,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice
      },
      this.searchTerm ?? ''
    ).subscribe({
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
    this.searchTerm = null;

    this.productService.searchProducts({
      category: null,
      minPrice: null,
      maxPrice: null,
    }, '').subscribe({
      next: (res) => this.products.set(res),
      error: console.error
    });
  }
}
