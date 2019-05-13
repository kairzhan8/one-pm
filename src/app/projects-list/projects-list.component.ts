import { Component, OnInit } from '@angular/core';
import { Project } from '../services/project.type';
import { SubProject } from '../services/subproject.type';
import { ProjectService } from '../services/project.service';
import { SubprojectService } from '../services/subproject.service';
import { DashboardTableDataService } from '../services/dashboard-table/dashboard-table-data.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  subprojects: SubProject[];

  constructor(private projectService: ProjectService,
              private subprojectService: SubprojectService,
              private dashboardService: DashboardTableDataService) { }

  ngOnInit() {

    this.dashboardService.getFullProjects()
      .subscribe(projects => {
        console.log(projects);
        // this.projects = projects;
      });
    this.projectService.getProjects().subscribe(
      res => {
        this.projects = res;
      }
    );

    this.subprojectService.getSubprojects().subscribe(
      res => {
        this.subprojects = res;
      }
    );
  }

}
