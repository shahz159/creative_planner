import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionToAssignRoutingModule } from './action-to-assign-routing.module';
import { ActionToAssignComponent } from './action-to-assign.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ActionToAssignComponent],
  imports: [
    CommonModule,
    ActionToAssignRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    NgSelectModule
  ]
})
export class ActionToAssignModule { }
