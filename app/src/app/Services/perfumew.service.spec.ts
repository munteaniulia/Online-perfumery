import { TestBed } from '@angular/core/testing';

import { PerfumewService } from './perfumew.service';

describe('PerfumewService', () => {
  let service: PerfumewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfumewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
