import { TestBed } from '@angular/core/testing';

import { RequiresAuthenticateGuard } from './requires-authenticate.guard';

describe('RequiresAuthenticateGuard', () => {
  let guard: RequiresAuthenticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequiresAuthenticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
