import { Component, signal } from '@angular/core';
import { AddProductModal } from '../../components/modal/add-product-modal/add-product-modal';
import { EditProductModal } from '../../components/modal/edit-product-modal/edit-product-modal';
import { DeleteProductModal } from '../../components/modal/delete-product-modal/delete-product-modal';

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
    EditProductModal, DeleteProductModal
  ],
  templateUrl: './products.html'
})
export class ProductsAdmPage {

  activeModal = signal<AdminModal>(null);

  openModal(modal: AdminModal) {
    this.activeModal.set(modal);
  }

  closeModal() {
    this.activeModal.set(null);
  }

}
