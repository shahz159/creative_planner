import { TestBed } from '@angular/core/testing';

import { ProjectMoreDetailsService } from './project-more-details.service';

describe('ProjectMoreDetailsService', () => {
  let service: ProjectMoreDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMoreDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
