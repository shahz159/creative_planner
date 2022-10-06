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




@NgModule({
  declarations: [MoreDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    MoreDetailsRoutingModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,NgSelectModule
  ],
  providers:[ProjectUnplannedTaskComponent,ToDoProjectsComponent,DatePipe]
})
export class MoreDetailsModule { }
