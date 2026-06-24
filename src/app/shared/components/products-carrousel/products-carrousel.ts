import { Component, Input, OnInit, signal } from '@angular/core';
import { ProductModels } from '../../../models/product.model';
import { ProductFilters, ProductsService } from '../../../core/services/products/products';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-products-carrousel',
  imports: [ButtonModule, CarouselModule, FavoriteButton],
  templateUrl: './products-carrousel.html',
  styleUrl: './products-carrousel.css',
})
export class ProductsCarrousel implements OnInit {

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
