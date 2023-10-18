import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectAssignTaskComponent } from "./project-assign-task.component";

import { ProjectAssignTaskRoutingModule } from './project-assign-task-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
 import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ProjectAssignTaskComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    FormsModule,
    
    MatSelectModule,
    MatDatepickerModule,
    ProjectAssignTaskRoutingModule,
    //MatAutocompleteModule
   
  ],
  providers:[
    ProjectUnplannedTaskComponent
  ]
})
export class ProjectAssignTaskModule { }
