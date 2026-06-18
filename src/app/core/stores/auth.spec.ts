import { TestBed } from '@angular/core/testing';

import { AuthStore } from './auth.store';

describe('Auth', () => {
  let service: AuthStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
