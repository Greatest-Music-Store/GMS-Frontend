import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cupomeofertas } from './cupomeofertas';

describe('Cupomeofertas', () => {
  let component: Cupomeofertas;
  let fixture: ComponentFixture<Cupomeofertas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cupomeofertas],
    }).compileComponents();

    fixture = TestBed.createComponent(Cupomeofertas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
