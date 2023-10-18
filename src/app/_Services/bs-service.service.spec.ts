import { TestBed } from '@angular/core/testing';

import { BsServiceService } from './bs-service.service';

describe('BsServiceService', () => {
  let service: BsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
