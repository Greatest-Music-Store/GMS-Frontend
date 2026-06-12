import { Component, OnInit } from '@angular/core';
import {
  CarouselComponent,
  CarouselConfig,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';
import { CarouselCustomConfig } from './carousel.config';

interface CarouselSlide {
  src: string;
  alt: string;
}

@Component({
  selector: 'docs-carousel03',
  templateUrl: './carousel03.html',
  styleUrl: './carousel.css', 
  standalone: true,
  imports: [
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent
  ],
  providers: [{ provide: CarouselConfig, useClass: CarouselCustomConfig }]
})
export class Carousel03 implements OnInit {
  slides: CarouselSlide[] = [];

  ngOnInit(): void {
    this.slides = [
      {
        src: 'https://brqcyvmsflpddaqxqjjl.supabase.co/storage/v1/object/public/Evento/Goat.jpeg',
        alt: 'Evento Goat'
      },
      {
        src: 'https://brqcyvmsflpddaqxqjjl.supabase.co/storage/v1/object/public/Evento/Mega%20Mayo.jpeg',
        alt: 'Evento Mega Mayo'
      },
      {
        src: 'https://brqcyvmsflpddaqxqjjl.supabase.co/storage/v1/object/public/Evento/Mega%20Mayo.jpeg',
        alt: 'Evento Mega Mayo'
      }
    ];
  }
}
