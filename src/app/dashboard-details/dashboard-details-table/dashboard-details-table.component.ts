import { Component, OnInit, Input } from '@angular/core';
import { CutsSectionService } from 'src/app/services/dashboard-details/cuts-section.service';
import { DetailsTableService } from 'src/app/services/dashboard-details/details-table/details-table.service';
import { Project } from 'src/app/services/project.type';
import { DashboardTableDataService } from 'src/app/services/dashboard-table/dashboard-table-data.service';
import { ProjectService } from 'src/app/services/project.service';
import { SubprojectService } from 'src/app/services/subproject.service';
import { SubProject } from 'src/app/services/subproject.type';
import { Observable, of } from 'rxjs';
import { projectStage } from 'src/app/services/projectStage.types';
import { STAGE_PLATFORMS, projectPlatform } from 'src/app/services/projectPlatform.types';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard-details-table',
  templateUrl: './dashboard-details-table.component.html',
  styleUrls: ['./dashboard-details-table.component.scss']
})
export class DashboardDetailsTableComponent implements OnInit {

  @Input()
  stage: string;

  platforms?: string[];

  months = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];

  days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48
  ];

  halfyears = [
    'Первое полугодие', 'Второе полугодие'
  ];

  quarters = [
    '1 квартал', '2 квартал', '3 квартал', '4 квартал'
  ];

  projects: Project[];
  subprojects: SubProject[];
  uniquePlatforms: Set<string> = new Set();
  showHalfyear = false;
  showQuarter = true;
  showMonth = true;
  showWeek = true;

  stages = Object.keys(projectStage).map(item => ({ value: projectStage[item], key: item })) ;



  constructor(private cutsSectionService: CutsSectionService,
              private projectService: ProjectService,
              private subprojectService: SubprojectService,
              private dashboardService: DashboardTableDataService) { }

  ngOnInit() {
    console.log(this.stage);
    this.getPlatforms();
    this.dashboardService.getFullProjects()
      .subscribe(projects => {
        console.log(projects);
        // this.projects = projects;
      });
    this.projectService.getProjects().subscribe(
      res => {
        this.projects = res;
        // this.calcChildren(this.projects);
      }
    );

    this.subprojectService.getSubprojects().subscribe(
      res => {
        this.subprojects = res;
      }
    );
  }

  getPlatforms() {
    this.platforms = Object
                      .keys(STAGE_PLATFORMS[this.stage] || {})
                      .map(item => projectPlatform[item]);
    return this.platforms.length;
  }

  setTimeScale(time: string) {
    switch (time) {
      case 'halfyear':
        this.showHalfyear = false;
        this.showQuarter = true;
        this.showMonth = true;
        this.showWeek = true;
        break;
      case 'quarter':
        this.showQuarter = false;
        this.showHalfyear = true;
        this.showMonth = true;
        this.showWeek = true;
        break;
      case 'month':
        this.showMonth = false;
        this.showHalfyear = true;
        this.showQuarter = true;
        this.showWeek = true;
        break;
      case 'week':
        this.showWeek = false;
        this.showHalfyear = true;
        this.showMonth = true;
        this.showQuarter = true;
        break;
    }
  }

}

