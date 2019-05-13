import { TestBed } from '@angular/core/testing';

import { CutsSectionService } from './cuts-section.service';

describe('CutsSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutsSectionService = TestBed.get(CutsSectionService);
    expect(service).toBeTruthy();
  });
});
