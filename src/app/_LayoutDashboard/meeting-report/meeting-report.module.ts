import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingReportComponent} from './meeting-report.component'

import { MeetingReportRoutingModule } from './meeting-report-routing.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MeetingReportComponent],
  imports: [
    CommonModule,
    MeetingReportRoutingModule
  ]
})
export class MeetingReportModule { }
