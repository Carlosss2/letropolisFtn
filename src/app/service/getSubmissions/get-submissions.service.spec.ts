import { TestBed } from '@angular/core/testing';

import { GetSubmissionsService } from './get-submissions.service';

describe('GetSubmissionsService', () => {
  let service: GetSubmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
