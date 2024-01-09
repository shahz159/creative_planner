import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MeetingReportComponent} from './meeting-report.component'

import { MeetingReportRoutingModule } from './meeting-report-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { DetailsComponent } from '../details/details/details.component';
import { CreateProjectComponent } from '../create-project/create-project.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MeetingReportComponent],
  imports: [
    CommonModule,NgSelectModule,
    MeetingReportRoutingModule,
    AngularEditorModule,
    FormsModule,ReactiveFormsModule,
    MatDatepickerModule,MatButtonModule, MatMenuModule, MatIconModule
  ],
  providers: [ 
    ProjectUnplannedTaskComponent, ToDoProjectsComponent, MoreDetailsComponent, DatePipe, ProjectsSummaryComponent, DetailsComponent,CreateProjectComponent
]
})
export class MeetingReportModule { }
