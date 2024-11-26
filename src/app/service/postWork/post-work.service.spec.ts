import { TestBed } from '@angular/core/testing';

import { PostWorkService } from './post-work.service';

describe('PostWorkService', () => {
  let service: PostWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
