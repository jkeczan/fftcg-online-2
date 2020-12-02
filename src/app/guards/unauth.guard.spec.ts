import { TestBed } from '@angular/core/testing';

import { UnauthGuard } from './unauthguard.guard';

describe('UnauthguardGuard', () => {
  let guard: UnauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
