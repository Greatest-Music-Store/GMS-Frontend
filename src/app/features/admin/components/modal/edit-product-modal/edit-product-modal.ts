import { Component,output } from '@angular/core';
import { FormArray,FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-product-modal',
  imports: [],
  templateUrl: './edit-product-modal.html',
})
export class EditProductModal {
  close = output<void>();

  imageUrls = new FormArray([
    new FormControl('')
  ]);
}
