import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from "src/app/material-module";
import { MeetingDetailsRoutingModule } from './meeting-details-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MeetingDetailsComponent } from './meeting-details.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { DetailsComponent } from '../details/details.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';

import { ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { TimeDiffPipe } from 'src/app/Shared/time-diff.pipe';
// import { TimeDiffPipe } from 'src/app/Shared/time-diff.pipe';
import {ShareModule} from '../../Shared/share/share.module';



// import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MeetingDetailsComponent
  ],
  imports: [
    CommonModule,
    MeetingDetailsRoutingModule,
    AngularEditorModule,
    MaterialModule,
    FormsModule,
    Ng2SearchPipeModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    ShareModule
    // FormsModule
  ],
  providers: [ 
    ProjectUnplannedTaskComponent, ToDoProjectsComponent, MoreDetailsComponent, DatePipe, ProjectsSummaryComponent, DetailsComponent,CreateProjectComponent,
    MeetingReportComponent
]
})
export class MeetingDetailsModule { }
