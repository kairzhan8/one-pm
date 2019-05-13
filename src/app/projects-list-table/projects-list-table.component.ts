import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../services/project.type';
import { SubProject } from '../services/subproject.type';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-projects-list-table',
  templateUrl: './projects-list-table.component.html',
  styleUrls: ['./projects-list-table.component.scss']
})
export class ProjectsListTableComponent implements OnInit {
  @Input() projects: Project[];
  @Input() subprojects: SubProject[];
  mappedSubprjts: Map<string, Array<SubProject>> = new Map();

  constructor(private router: Router) { }

  ngOnInit() {
    this.subprojects.forEach(subp => {
      if (this.mappedSubprjts.has(subp.projectId)) {
        this.mappedSubprjts.get(subp.projectId).push(subp);
      } else {
        this.mappedSubprjts.set(subp.projectId, [subp]);
      }
    });
  }

  getSubps(projectId: string) {
    return this.mappedSubprjts.get(projectId);
  }

  projectPage(projectId: string) {
    // this.router.navigateByUrl(['/project', projectId]);
  }
}
