import { TestBed } from '@angular/core/testing';

import { DetailsTableRestService } from './details-table-rest.service';

describe('DetailsTableRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsTableRestService = TestBed.get(DetailsTableRestService);
    expect(service).toBeTruthy();
  });
});
