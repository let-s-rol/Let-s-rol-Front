import { TestBed } from '@angular/core/testing';

import { NewRunService } from './new-run.service';

describe('NewRunService', () => {
  let service: NewRunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
