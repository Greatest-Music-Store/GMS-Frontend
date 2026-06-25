import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdmPage } from './products';

describe('Products', () => {
  let component: ProductsAdmPage;
  let fixture: ComponentFixture<ProductsAdmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAdmPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsAdmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
