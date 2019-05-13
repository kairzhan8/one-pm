import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent implements OnInit {

  date = new Date();
  stage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.stage = this.route.snapshot.paramMap.get('details');
  }


}
