import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreDetailsRoutingModule } from './more-details-routing.module';
import { MoreDetailsComponent } from './more-details.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component'; 
import { NotificationComponent } from '../notification/notification.component';
import { ProjectInfoModule } from '../project-info/project-info.module';
import { TruncatePipe } from '../project-info/truncate.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { DetailsComponent } from '../details/details/details.component';
import { CreateProjectComponent } from '../create-project/create-project.component';


@NgModule({
  declarations: [MoreDetailsComponent],
  imports: [
    CommonModule, 
    FormsModule,ReactiveFormsModule,
    MoreDetailsRoutingModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,NgSelectModule,
    MatFormFieldModule,ProjectInfoModule,
    PdfViewerModule,
    NgxDocViewerModule,
    Ng2SearchPipeModule
  ],
  providers:[ProjectUnplannedTaskComponent,ToDoProjectsComponent,DatePipe, ProjectsSummaryComponent,NotificationComponent,
     TruncatePipe,MeetingReportComponent,DetailsComponent,CreateProjectComponent,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
    // ,{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class MoreDetailsModule { }
