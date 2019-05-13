import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CutsSectionService {

  //private sidenavOpenSubject = [];

  constructor() {
    //this.sidenavOpenSubject = [];
   }

  check(x) {
    //console.log('IN cuts service' + x);
  }

  toggleSideNav(opening: boolean): void {
      //this.sidenavOpenSubject.push(opening);
  }

  //onSideNavToggle(): Observable<boolean> {
      //return new Observable<boolean>();
  //}

}
