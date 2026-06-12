import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel03 } from './carousel03';

describe('Carousel03', () => {
  let component: Carousel03;
  let fixture: ComponentFixture<Carousel03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel03],
    }).compileComponents();

    fixture = TestBed.createComponent(Carousel03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
