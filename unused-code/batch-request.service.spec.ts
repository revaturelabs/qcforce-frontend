import { TestBed } from '@angular/core/testing';

import { BatchRequestService } from './batch-request.service';

describe('BatchRequestService', () => {
  let service: BatchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
