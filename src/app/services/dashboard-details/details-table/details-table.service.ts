import { Injectable } from '@angular/core';
import { Project } from '../../project.type';
import { Observable, of } from 'rxjs';
import { DetailsTableRestService } from './details-table-rest.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsTableService {

  constructor(private detailRestService: DetailsTableRestService) { }

}
