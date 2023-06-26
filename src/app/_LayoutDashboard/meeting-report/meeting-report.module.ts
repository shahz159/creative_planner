import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingReportComponent} from './meeting-report.component'

import { MeetingReportRoutingModule } from './meeting-report-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MeetingReportComponent],
  imports: [
    CommonModule,
    MeetingReportRoutingModule,
    AngularEditorModule,
  ]
})
export class MeetingReportModule { }
