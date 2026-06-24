import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProductsService } from '../../../core/services/products/products';
import { ProductsCarrousel } from './products-carrousel';

describe('ProductsCarrousel', () => {
  let component: ProductsCarrousel;
  let fixture: ComponentFixture<ProductsCarrousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCarrousel],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            getProducts: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsCarrousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
