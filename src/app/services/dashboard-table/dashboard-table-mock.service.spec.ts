import { TestBed } from '@angular/core/testing';

import { DashboardTableMockService } from './dashboard-table-mock.service';

describe('DashboardTableMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardTableMockService = TestBed.get(DashboardTableMockService);
    expect(service).toBeTruthy();
  });
});
