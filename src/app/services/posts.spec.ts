import { TestBed } from '@angular/core/testing';

import { PostServise } from './posts';

describe('PostServise', () => {
  let service: PostServise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostServise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
