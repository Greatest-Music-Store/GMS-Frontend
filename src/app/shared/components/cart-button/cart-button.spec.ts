import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { CartService } from '../../../core/services/cart/cart';
import { CartButton } from './cart-button';

describe('CartButton', () => {
  let component: CartButton;
  let fixture: ComponentFixture<CartButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartButton],
      providers: [
        provideRouter([]),
        {
          provide: CartService,
          useValue: {
            addToCart: () => of({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartButton);
    component = fixture.componentInstance;
    component.productId = 'product-id';
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
