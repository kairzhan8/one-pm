import { TestBed } from '@angular/core/testing';

import { DashboardTableDataService } from './dashboard-table-data.service';

describe('DashboardTableDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardTableDataService = TestBed.get(DashboardTableDataService);
    expect(service).toBeTruthy();
  });
});
