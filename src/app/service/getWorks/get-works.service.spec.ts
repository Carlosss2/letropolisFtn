import { TestBed } from '@angular/core/testing';

import { GetWorksService } from './get-works.service';

describe('GetWorksService', () => {
  let service: GetWorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWorksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
