import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlockModal } from './user-block-modal';

describe('UserBlockModal', () => {
  let component: UserBlockModal;
  let fixture: ComponentFixture<UserBlockModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBlockModal],
    }).compileComponents();

    fixture = TestBed.createComponent(UserBlockModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
