import { TestBed } from '@angular/core/testing';

import { SeeSTudentsClassService } from './see-students-class.service';

describe('SeeSTudentsClassService', () => {
  let service: SeeSTudentsClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeSTudentsClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
