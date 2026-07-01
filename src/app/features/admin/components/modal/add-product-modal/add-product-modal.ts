import { Component, OnInit, output, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../../../core/services/products/products';
import { ProductRequest } from '../../../../../models/product.model';
import { CategoryModel, SubcategoryModel } from '../../../../../models/product.model';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-modal.html',
})
export class AddProductModal implements OnInit {
  close = output<void>();
  productAdded = output<void>();

  categories = signal<CategoryModel[]>([]);
  subcategories = signal<SubcategoryModel[]>([]);

  postForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    price: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    imageUrls: new FormArray<FormControl<string>>([
      new FormControl('', { nonNullable: true, validators: [Validators.required] })
    ]),
    brand: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    quantity: new FormControl(0, { nonNullable: true }),
    discountPercentage: new FormControl(0, { nonNullable: true }),
    categoryID: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    subCategoryId: new FormControl({ value: '', disabled: true }, {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadCategories();

    this.postForm.controls.categoryID.valueChanges.subscribe((categoryId) => {
      console.log('categoryId selecionado:', categoryId);

      this.postForm.controls.subCategoryId.reset('');
      this.subcategories.set([]);

      if (!categoryId || categoryId === 'undefined') {
        this.postForm.controls.subCategoryId.disable();
        return;
      }

      this.postForm.controls.subCategoryId.enable();
      this.loadSubcategories(categoryId);
    });
  }

  get imageUrls() {
    return this.postForm.controls.imageUrls;
  }

  addImage() {
    if (this.imageUrls.length >= 4) return;

    this.imageUrls.push(
      new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    );
  }

  removeImage(index: number) {
    if (this.imageUrls.length === 1) return;
    this.imageUrls.removeAt(index);
  }

  loadCategories() {
  this.productService.getCategories().subscribe({
    next: (categories) => {
      console.log('categorias da API:', categories);
      this.categories.set(categories);
    },
    error: (error) => {
      console.error('Erro ao buscar categorias:', error);
    }
  });
}

  loadSubcategories(categoryId: string) {
    this.productService.getSubcategories(categoryId).subscribe({
      next: (subcategories) => {
        this.subcategories.set(subcategories);
      },
      error: (error) => {
        console.error('Erro ao buscar subcategorias:', error);
      }
    });
  }

  postProduct() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    const productData: ProductRequest = this.postForm.getRawValue();

    this.productService.postProduct(productData).subscribe({
      next: () => {
        this.productAdded.emit();
        this.close.emit();
      },
      error: (error) => {
        console.error('Erro ao adicionar produto:', error);
      }
    });
  }
}