import { TestBed } from '@angular/core/testing';

import { PostSubmissionsService } from './post-submissions.service';

describe('PostSubmissionsService', () => {
  let service: PostSubmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSubmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
