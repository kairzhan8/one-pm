import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsListComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: ':details', component: DashboardDetailsComponent}
    ]
  },
  // {path: 'dashboard-details', component: DashboardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
