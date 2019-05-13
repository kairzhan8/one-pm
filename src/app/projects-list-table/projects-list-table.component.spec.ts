import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListTableComponent } from './projects-list-table.component';

describe('ProjectsListTableComponent', () => {
  let component: ProjectsListTableComponent;
  let fixture: ComponentFixture<ProjectsListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
