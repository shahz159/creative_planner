import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionToProjectRoutingModule } from './action-to-project-routing.module';
import { ActionToProjectComponent } from './action-to-project.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NotificationService } from 'src/app/_Services/notification.service';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ActionToProjectComponent],
  imports: [
    CommonModule,
    ActionToProjectRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,NgSelectModule
  ],exports:[
    ActionToProjectComponent
  ],
  providers:[
    NotificationService
  ]
})
export class ActionToProjectModule { }
