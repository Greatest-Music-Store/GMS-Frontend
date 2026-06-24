import { Component, OnInit } from '@angular/core';
import { CarouselConfig, } from '@coreui/angular';
import { CarouselCustomConfig } from './carousel.config';

interface CarouselSlide {
  src: string;
  alt: string;
}

@Component({
  selector: 'docs-carousel03',
  templateUrl: './carousel03.html', 
  standalone: true,
  imports: [
  ],
  providers: [{ provide: CarouselConfig, useClass: CarouselCustomConfig }]
})
export class Carousel03  {
}
