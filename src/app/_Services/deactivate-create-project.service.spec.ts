import { TestBed } from '@angular/core/testing';

import { DeactivateCreateProjectService } from './deactivate-create-project.service';

describe('DeactivateCreateProjectService', () => {
  let service: DeactivateCreateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivateCreateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
