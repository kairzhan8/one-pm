import { Injectable } from '@angular/core';
import { DashboardTableMockService } from './dashboard-table-mock.service';
import { ProjectService } from '../project.service';
import { SubprojectService } from '../subproject.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Project } from '../project.type';
import { SubProject } from '../subproject.type';

@Injectable({
  providedIn: 'root'
})
export class DashboardTableDataService {

  constructor(
    private dashboardTableMockService: DashboardTableMockService,
    private projectService: ProjectService,
    private subprojectService: SubprojectService,
  ) { }

  // getProjects() {
  //   return this.dashboardTableMockService.getProjects();
  // }

  getFullProjects(): Observable<Project[]> {
    return this.projectService.getProjects()
      .pipe(
        mergeMap(projects => {
          return this.subprojectService.getSubprojects()
            .pipe(
              map(subprojects => {
                const groupped = this.groupSubprojectsByProject(subprojects);
                projects.forEach(project => {
                  project.subprojects = groupped[project.id] ? groupped[project.id] : [];
                });
                return projects;
              }),
            );
        }),
        catchError(err => of(err)),
      );
  }

  getFullProjectsByTitle(title: string): Observable<Project[]> {
    return this.projectService.getProjectByTitle(title)
      .pipe(
        mergeMap(projects => {
          return this.subprojectService.getSubprojects()
            .pipe(
              map(subprojects => {
                const groupped = this.groupSubprojectsByProject(subprojects);
                projects.forEach(project => {
                  project.subprojects = groupped[project.id] ? groupped[project.id] : [];
                });
                return projects;
              }),
            );
        }),
        catchError(err => of(err)),
      );
  }

  groupSubprojectsByProject(subprojects: SubProject[]): {[projectId: string]: SubProject[]} {
    return subprojects.reduce((dict, subproject) => {
      if (!dict[subproject.projectId]) {
        dict[subproject.projectId] = [];
      }
      dict[subproject.projectId].push(subproject);
      return dict;
    }, {});
  }
}
