import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionToProjectRoutingModule } from './action-to-project-routing.module';
import { ActionToProjectComponent } from './action-to-project.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [ActionToProjectComponent],
  imports: [
    CommonModule,
    ActionToProjectRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class ActionToProjectModule { }
