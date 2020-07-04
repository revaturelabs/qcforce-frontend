import { TestBed } from '@angular/core/testing';

import { SurveyBatchIdService } from './survey-batch-id.service';

describe('SurveyBatchIdService', () => {
  let service: SurveyBatchIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyBatchIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
