import { TestBed } from '@angular/core/testing';

import { FarmsService } from './farms.service';

describe('FarmsService', () => {
  let service: FarmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
