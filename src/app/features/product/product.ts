import { Component, OnInit } from '@angular/core';
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

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
  const id = this.routes.snapshot.paramMap.get('id');

  console.log('ID da URL:', id);

  if (!id) return;

  this.productService.getProductById(id).subscribe({
    next: (product) => {
      this.product = product;

      this.titleService.setTitle(
      `${product.name} | Greatest Music Store`
    );
    },
    error: (error) => {
      console.error(error);
    }
  });
}

  mainImage(product: ProductModels): string {
    return product.imageUrls?.[0] ?? '';
  }

  
}
