import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCarrousel } from './products-carrousel';

describe('ProductsCarrousel', () => {
  let component: ProductsCarrousel;
  let fixture: ComponentFixture<ProductsCarrousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCarrousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsCarrousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
