import { Component, OnInit, Input } from '@angular/core';
import { projectStage } from 'src/app/services/projectStage.types';
import { projectPlatform } from 'src/app/services/projectPlatform.types';
import { DashboardTableDataService } from 'src/app/services/dashboard-table/dashboard-table-data.service';
import { Project } from 'src/app/services/project.type';
import { ProjectService } from 'src/app/services/project.service';
import { SubprojectService } from 'src/app/services/subproject.service';
import { SubProject } from 'src/app/services/subproject.type';
import { SubProjectStage } from 'src/app/services/subprojectstage.type';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  stage = projectStage;
  stages = Object.keys(projectStage).map(item => ({ value: projectStage[item], key: item })) ;
  platforms: Array<string> = Object.keys(projectPlatform).map(item => projectPlatform[item]);


  projects: Project[];
  subprojects: SubProject[];
  stagess = [];

  clickedDesign = '+';
  clickedFront = '+';
  clickedFolding = '-';

  platformCounts = [];
  designIsHidden = true;
  frontIsHidden = true;
  stagesIsHidden = false;

  constructor(private dashboardService: DashboardTableDataService,
              private projectService: ProjectService,
              private subprojectService: SubprojectService
              ) { }

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
      console.log(res + 'res');
      this.subprojects = res;
      this.platformCounts = this.stages.map(stage => {
        const count = this.subprojects[0].subprojectstage.filter(st => stage.key === st.projectStage).length;
        return { stage: stage.key, count };
      });
    }
  );

    this.subprojects.map(subpr => {
    // console.log(subpr);
    subpr.subprojectstage.forEach(element => {
      this.stagess.push(element);
      // console.log(this.stagess);
    });
  });

}

  getStagePlatforms() {
  }

  getColSpan(stage: string) {
    if (stage === 'design') {
      return this.designIsHidden ? 5 : 7;
    } else {
      return this.frontIsHidden ? 5 : 7;
    }
  }

  getStageCount(stage: string): number {
    return this.platformCounts.find(value => value.stage === stage).count;
  }

  hide(stage: string) {
    if (stage === 'design') {
      this.designIsHidden = !this.designIsHidden;
      if (this.clickedDesign === '+') {
        this.clickedDesign = '-';
      } else {
        this.clickedDesign = '+';
      }
    } else {
      this.frontIsHidden = !this.frontIsHidden;
      if (this.clickedFront === '+') {
        this.clickedFront = '-';
      } else {
        this.clickedFront = '+';
      }
    }
  }

  folding() {
    this.stagesIsHidden = !this.stagesIsHidden;
    if (this.clickedFolding === '-') {
      this.clickedFolding = '+';
    } else {
      this.clickedFolding = '-';
    }
  }
}
