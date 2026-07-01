import { Component, output, input } from '@angular/core';
import { ProductsService } from '../../../../../core/services/products/products';
import { ProductModels } from '../../../../../models/product.model';
@Component({
  selector: 'app-delete-product-modal',
  imports: [],
  templateUrl: './delete-product-modal.html',
  standalone: true,

})
export class DeleteProductModal {
  product = input.required<ProductModels>();
  close = output<void>();
  deleted = output<void>();
  constructor(private productService: ProductsService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.product().productId).subscribe({
        next: () => {
          this.deleted.emit();
          this.close.emit();
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}
