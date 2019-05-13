import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LegendPanelComponent } from './dashboard/legend-panel/legend-panel.component';
import { DashboardTableComponent } from './dashboard/dashboard-table/dashboard-table.component';

import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsListTableComponent } from './projects-list-table/projects-list-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CreateButtonComponent } from './create-button/create-button.component';
import { ButtonBorderComponent } from './button-border/button-border.component';
import { HeaderComponent } from './header/header.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardDetailsTableComponent } from './dashboard-details/dashboard-details-table/dashboard-details-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LegendPanelComponent,
    DashboardTableComponent,
    ProjectsListComponent,
    ProjectsListTableComponent,
    SearchBarComponent,
    CreateButtonComponent,
    ButtonBorderComponent,
    HeaderComponent,
    SearchBarComponent,
    DashboardDetailsComponent,
    DashboardDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
