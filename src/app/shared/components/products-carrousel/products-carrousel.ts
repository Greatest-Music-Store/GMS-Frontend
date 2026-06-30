import { Component, Input, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { ProductModels, ProductFilters} from '../../../models/product.model';
import { ProductsService } from '../../../core/services/products/products';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';
import { CartButton } from '../cart-button/cart-button';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-products-carrousel',
  imports: [CarouselModule, FavoriteButton, RouterLink, CartButton, CurrencyPipe],
  templateUrl: './products-carrousel.html',
})
export class ProductsCarrousel implements OnInit, OnChanges {

  @Input() filters: ProductFilters = {};

  products = signal<ProductModels[]>([]);

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.loadProducts();
    }
  }

  private loadProducts(): void {
    this.productService.getProducts(this.filters).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Erro ao carregar produtos do carrossel:', error);
        this.products.set([]);
      }
    });
  }

  mainImage(product: ProductModels): string {
    return product.imageUrls?.[0] ?? '';
  }

}
