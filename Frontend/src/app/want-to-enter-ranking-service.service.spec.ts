import { TestBed } from '@angular/core/testing';

import { WantToEnterRankingServiceService } from './want-to-enter-ranking-service.service';

describe('WantToEnterRankingServiceService', () => {
  let service: WantToEnterRankingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WantToEnterRankingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
