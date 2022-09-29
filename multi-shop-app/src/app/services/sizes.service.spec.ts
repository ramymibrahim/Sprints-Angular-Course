import { TestBed } from '@angular/core/testing';

import { SizesService } from './sizes.service';

describe('SizesService', () => {
  let service: SizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
