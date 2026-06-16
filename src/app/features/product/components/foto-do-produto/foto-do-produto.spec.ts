import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDoProduto } from './foto-do-produto';

describe('FotoDoProduto', () => {
  let component: FotoDoProduto;
  let fixture: ComponentFixture<FotoDoProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoDoProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(FotoDoProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
