import { TestBed } from '@angular/core/testing';

import { AddStudentClassService } from './add-student-class.service';

describe('AddStudentClassService', () => {
  let service: AddStudentClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStudentClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
