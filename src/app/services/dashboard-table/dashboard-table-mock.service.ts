import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../project.type';

@Injectable({
  providedIn: 'root'
})
export class DashboardTableMockService {


  constructor() { }

  // getProjects(): Observable<Project[]> {
  //   return of(this.projects);
  // }

}
