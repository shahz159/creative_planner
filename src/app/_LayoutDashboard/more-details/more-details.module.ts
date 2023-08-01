import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreDetailsRoutingModule } from './more-details-routing.module';
import { MoreDetailsComponent } from './more-details.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';

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



@NgModule({
  declarations: [MoreDetailsComponent],
  imports: [
    CommonModule, 
    FormsModule,ReactiveFormsModule,
    MoreDetailsRoutingModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,NgSelectModule,
    MatFormFieldModule,ProjectInfoModule
  ],
  providers:[ProjectUnplannedTaskComponent,ToDoProjectsComponent,DatePipe, ProjectsSummaryComponent,NotificationComponent, TruncatePipe]
    // ,{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class MoreDetailsModule { }
