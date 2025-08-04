import { TestBed } from '@angular/core/testing';

import { AuthServiseTs } from './auth.servise.ts';

describe('AuthServiseTs', () => {
  let service: AuthServiseTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiseTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
