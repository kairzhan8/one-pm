import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsTableComponent } from './dashboard-details-table.component';

describe('DashboardDetailsTableComponent', () => {
  let component: DashboardDetailsTableComponent;
  let fixture: ComponentFixture<DashboardDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
