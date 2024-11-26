import { TestBed } from '@angular/core/testing';

import { AddClassTeacherService } from './add-class-teacher.service';

describe('AddClassTeacherService', () => {
  let service: AddClassTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddClassTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
