import { Component } from '@angular/core';
import { Carousel03 } from '../components/carousel03/carousel03';
import { ProductsCarrousel } from '../../../shared/components/products-carrousel/products-carrousel';
import { AlignDirective, AlertLinkDirective } from "@coreui/angular";

@Component({
  selector: 'app-home',
  imports: [Carousel03, ProductsCarrousel, AlignDirective, AlertLinkDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
