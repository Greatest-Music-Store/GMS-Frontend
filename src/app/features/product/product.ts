import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductModels } from '../../models/product.model';
import { ProductsService } from '../../core/services/products/products';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { tdesignStarFilled } from '@ng-icons/tdesign-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-product',
  imports: [NgIcon],
  templateUrl: './product.html',
  styleUrl: './product.css',
  viewProviders: [provideIcons({ tdesignStarFilled})]
})
export class Product implements OnInit{

  product?: ProductModels;
  loading = true;
  errorMessage = '';

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const id = this.routes.snapshot.paramMap.get('id');

    console.log('ID da URL:', id);

    if (!id) {
      this.loading = false;
      this.errorMessage = 'Produto não encontrado.';
      return;
    }

    this.productService.getProductById(id).subscribe({
      next: (product) => {
        setTimeout(() => {
          this.product = product;
          this.loading = false;

          this.titleService.setTitle(
            `${product.name} | Greatest Music Store`
          );
        });
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
        this.errorMessage = 'Não foi possível carregar este produto.';
      }
    });
  }

  mainImage(product: ProductModels): string {
    return product.imageUrls?.[0] ?? '';
  }

  
}
