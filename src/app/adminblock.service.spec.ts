import { TestBed } from '@angular/core/testing';

import { AdminblockService } from './adminblock.service';

describe('AdminblockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminblockService = TestBed.get(AdminblockService);
    expect(service).toBeTruthy();
  });
});
