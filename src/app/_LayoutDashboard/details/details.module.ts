import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  providers: [ 
    ProjectUnplannedTaskComponent, ToDoProjectsComponent, MoreDetailsComponent, DatePipe, ProjectsSummaryComponent, MeetingReportComponent
   ]
})
export class DetailsModule { }
