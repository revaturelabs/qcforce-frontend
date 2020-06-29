import { TestBed } from '@angular/core/testing';

import { BatchEffect } from './batch.effect';

describe('BatchEffect', () => {
  let effect: BatchEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    effect = TestBed.inject(BatchEffect);
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });
});
