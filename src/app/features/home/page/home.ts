import { Component } from '@angular/core';
import { Carousel03 } from '../components/carousel03/carousel03';
import { ProductsCarrousel } from '../../../shared/components/products-carrousel/products-carrousel';
import { AlignDirective, AlertLinkDirective } from "@coreui/angular";
import { ProductFilters } from '../../../core/services/products/products';
import { ProductModels } from '../../../models/product.model';
@Component({
  selector: 'app-home',
  imports: [Carousel03, ProductsCarrousel, AlignDirective, AlertLinkDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

     relatedProductFilters: ProductFilters = {};

  //  private categoryFilters(product: ProductModels): ProductFilters {
        
    //  }
}
