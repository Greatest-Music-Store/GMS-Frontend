import { Component, OnInit } from '@angular/core';
import { ProductModels } from '../../models/product.model';
import { ProductsService } from '../../core/services/products/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit{

  product?: ProductModels;

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
  const id = this.routes.snapshot.paramMap.get('id');

  console.log('ID da URL:', id);

  if (!id) return;

  this.productService.getProductById(id).subscribe({
    next: (product) => {
      this.product = product;
    },
    error: (error) => {
      console.error(error);
    }
  });
}

  
}
