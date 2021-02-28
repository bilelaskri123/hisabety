import { TestBed } from '@angular/core/testing';

import { TreasuriesService } from './treasuries.service';

describe('TreasuriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreasuriesService = TestBed.get(TreasuriesService);
    expect(service).toBeTruthy();
  });
});
