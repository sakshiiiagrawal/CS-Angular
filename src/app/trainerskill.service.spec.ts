import { TestBed } from '@angular/core/testing';

import { TrainerskillService } from './trainerskill.service';

describe('TrainerskillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerskillService = TestBed.get(TrainerskillService);
    expect(service).toBeTruthy();
  });
});
