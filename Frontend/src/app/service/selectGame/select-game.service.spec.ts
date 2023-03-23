import { TestBed } from '@angular/core/testing';

import { SelectGameService } from './select-game.service';

describe('SelectGameService', () => {
  let service: SelectGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
