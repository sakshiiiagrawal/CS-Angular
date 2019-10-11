import { TestBed } from '@angular/core/testing';

import { TrainerprofileService } from './trainerprofile.service';

describe('TrainerprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerprofileService = TestBed.get(TrainerprofileService);
    expect(service).toBeTruthy();
  });
});
