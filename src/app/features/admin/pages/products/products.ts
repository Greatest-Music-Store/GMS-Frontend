import { Component, Input, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { AddProductModal } from '../../components/modal/add-product-modal/add-product-modal';
import { EditProductModal } from '../../components/modal/edit-product-modal/edit-product-modal';
import { DeleteProductModal } from '../../components/modal/delete-product-modal/delete-product-modal';
import { ProductsService } from '../../../../core/services/products/products';
import { ProductFilters, ProductRequest } from '../../../../models/product.model';
import { ProductModels } from '../../../../models/product.model';
import { CurrencyPipe } from '@angular/common';

type AdminModal =
  | 'addProduct'
  | 'editProduct'
  | 'deleteProduct'
  | null;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AddProductModal,
    EditProductModal, DeleteProductModal, CurrencyPipe
  ],
  templateUrl: './products.html'
})
export class ProductsAdmPage {
  @Input() filters: ProductFilters = {};

  products = signal<ProductModels[]>([]);
  selectedProduct = signal<ProductModels | null>(null);
  activeModal = signal<AdminModal>(null);

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.loadProducts();
    }
  }

  openModal(modal: AdminModal) {
    this.activeModal.set(modal);
  }

  openEditModal(product: ProductModels) {
    this.selectedProduct.set(product);
    this.activeModal.set('editProduct');
  }

  openDeleteModal(product: ProductModels) {
    this.selectedProduct.set(product);
    this.activeModal.set('deleteProduct');
  }

  closeModal() {
    this.activeModal.set(null);
    this.selectedProduct.set(null);
  }

  loadProducts(): void {
    this.productService.getProducts(this.filters).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
        this.products.set([]);
      }
    });
  }
}