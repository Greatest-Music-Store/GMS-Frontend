import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart/cart';
import { AlignDirective } from "@coreui/angular";
@Component({
  selector: 'app-checkout',
  imports: [AlignDirective],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

}
