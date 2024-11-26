import { TestBed } from '@angular/core/testing';

import { DeleteSTudentsClassService } from './delete-students-class.service';

describe('DeleteSTudentsClassService', () => {
  let service: DeleteSTudentsClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSTudentsClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
