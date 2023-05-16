import { TestBed } from '@angular/core/testing';

import { CompleteRunManagamentService } from './complete-run-managament.service';

describe('CompleteRunManagamentService', () => {
  let service: CompleteRunManagamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteRunManagamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
