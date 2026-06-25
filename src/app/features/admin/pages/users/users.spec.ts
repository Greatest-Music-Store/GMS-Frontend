import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdmPage } from './users';

describe('Users', () => {
  let component: UsersAdmPage;
  let fixture: ComponentFixture<UsersAdmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAdmPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersAdmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
