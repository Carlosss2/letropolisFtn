import { TestBed } from '@angular/core/testing';

import { GetClassesService } from './get-classes.service';

describe('GetClassesService', () => {
  let service: GetClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
