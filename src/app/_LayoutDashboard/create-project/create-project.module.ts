import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent} from './create-project.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { FormsModule } from '@angular/forms';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { DetailsComponent } from '../details/details/details.component';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';

 
@NgModule({
  declarations: [CreateProjectComponent],
  imports: [
    CommonModule,
    CreateProjectRoutingModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [ProjectsSummaryComponent,MeetingReportComponent,DetailsComponent,DatePipe,ProjectUnplannedTaskComponent,ToDoProjectsComponent,MoreDetailsComponent   ]
})
export class CreateProjectModule { }
