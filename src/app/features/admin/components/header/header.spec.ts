import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderADM } from './header';

describe('Header', () => {
  let component: HeaderADM;
  let fixture: ComponentFixture<HeaderADM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderADM],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderADM);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
