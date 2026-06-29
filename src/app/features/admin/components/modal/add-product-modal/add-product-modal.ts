import { Component, output } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product-modal',
  imports: [],
  templateUrl: './add-product-modal.html',
})
export class AddProductModal {
  close = output<void>();

  imageUrls = new FormArray([
    new FormControl('')
  ]);

}
