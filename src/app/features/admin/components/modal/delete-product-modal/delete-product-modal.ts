import { Component,output } from '@angular/core';

@Component({
  selector: 'app-delete-product-modal',
  imports: [],
  templateUrl: './delete-product-modal.html',

})
export class DeleteProductModal {
  close = output<void>();
}
