import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Project } from './project.type';
import { User } from './user.type';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private user: User = {
    userId: '1',
    fullName: 'Aiganym Zhandaulet'
  };

  private projects: Project[] = [
    {
      id: '1',
      name: 'Форте МИБ',
      description: 'cool project',
      logo: 'assets/project-icons/rocket.svg',
      avatar: 'assets/project-icons/rocket.svg',
      responsible: {
        userId: '1',
        fullName: 'Sergio Ramos'
      },
      subprojects: []
    },
    {
      id: '2',
      name: 'Форте МИБ',
      description: 'cool project',
      logo: 'assets/project-icons/origami.svg',
      avatar: 'assets/project-icons/origami.svg',
      responsible: {
        userId: '2',
        fullName: 'Isco Alarcon'
      },
      subprojects: []
    },
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectByTitle(title: string): Observable<Project[]> {
    return of(this.projects.filter(project => project.name.includes(title)));
  }
}
