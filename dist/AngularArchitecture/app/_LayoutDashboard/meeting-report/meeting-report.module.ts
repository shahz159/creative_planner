import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingReportComponent} from './meeting-report.component'

import { MeetingReportRoutingModule } from './meeting-report-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MeetingReportComponent],
  imports: [
    CommonModule,NgSelectModule,
    MeetingReportRoutingModule,
    AngularEditorModule,
    FormsModule,ReactiveFormsModule,
    MatDatepickerModule
  ],
  providers: [ 
    ProjectUnplannedTaskComponent
]
})
export class MeetingReportModule { }
