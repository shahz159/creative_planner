import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { MoreDetailsRoutingModule } from './more-details-routing.module';
import { MoreDetailsComponent } from './more-details.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';

import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';


@NgModule({
  declarations: [MoreDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoreDetailsRoutingModule,
    NgMultiSelectDropDownModule
  ],
  providers:[ProjectUnplannedTaskComponent,ToDoProjectsComponent ]
})
export class MoreDetailsModule { }
