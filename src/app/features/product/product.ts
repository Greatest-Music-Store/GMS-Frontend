import { Component, OnInit } from '@angular/core';
import { ProductModels } from '../../models/product.model';
import { ProductsService } from '../../core/services/products/products';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { tdesignStarFilled } from '@ng-icons/tdesign-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { FavoriteButton } from '../../shared/components/favorite-button/favorite-button';
import { CartButton } from '../../shared/components/cart-button/cart-button';
import { ProductsCarrousel } from '../../shared/components/products-carrousel/products-carrousel';
import { ProductFilters } from '../../models/product.model';


@Component({
  selector: 'app-product',
  imports: [NgIcon, FavoriteButton, CartButton, ProductsCarrousel],
  templateUrl: './product.html',

  viewProviders: [provideIcons({ tdesignStarFilled})]
})
export class Product implements OnInit{

  product?: ProductModels;
  routeProductId = '';
  relatedProductFilters: ProductFilters = {};

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.routes.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');

        this.routeProductId = id ?? '';

        if (!id) {
          return EMPTY;
        }

        const stateProduct = this.getNavigationProduct();

        if (stateProduct?.productId === id) {
          this.setProduct(stateProduct);
        }

        return this.loadProduct(id);
      })
    ).subscribe({
      next: (product) => {
        this.setProduct(product);
      }
    });
  }

  mainImage(product: ProductModels): string {
    return product.imageUrls?.[0] ?? '';
  }

  private categoryFilters(product: ProductModels): ProductFilters {
    if (product.categoryID) {
      return { CategoryId: product.categoryID };
    }

    if (product.categoryName) {
      return { CategoryName: product.categoryName };
    }

    return {};
  }

  private setProduct(product: ProductModels): void {
    this.product = product;
    this.relatedProductFilters = this.categoryFilters(product);

    this.titleService.setTitle(
      `${product.name} | Greatest Music Store`
    );
  }

  private loadProduct(id: string) {
    return this.productService.getProductById(id).pipe(
      catchError((error) => {
        console.error('Erro ao buscar produto por id, tentando lista:', error);

        return this.productService.getProducts().pipe(
          map((products) => products.find((product) => product.productId === id)),
          switchMap((product) => product ? [product] : EMPTY),
          catchError((listError) => {
            console.error('Erro ao buscar produto pela lista:', listError);
            return EMPTY;
          })
        );
      })
    );
  }

  private getNavigationProduct(): ProductModels | undefined {
    const currentProduct = this.router.getCurrentNavigation()?.extras.state?.['product'] as ProductModels | undefined;
    const historyProduct = typeof history !== 'undefined'
      ? history.state?.['product'] as ProductModels | undefined
      : undefined;

    return currentProduct ?? historyProduct;
  }

  
}
