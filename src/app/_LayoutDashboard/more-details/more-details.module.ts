import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { MoreDetailsRoutingModule } from './more-details-routing.module';
import { MoreDetailsComponent } from './more-details.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ActionToProjectModule } from '../action-to-project/action-to-project.module';

 


@NgModule({
  declarations: [MoreDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoreDetailsRoutingModule,
    NgMultiSelectDropDownModule,
    ActionToProjectModule
  ]
})
export class MoreDetailsModule { }
