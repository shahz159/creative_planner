import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { MoreDetailsRoutingModule } from './more-details-routing.module';
import { MoreDetailsComponent } from './more-details.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

 


@NgModule({
  declarations: [MoreDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoreDetailsRoutingModule,
    NgMultiSelectDropDownModule
  ]
})
export class MoreDetailsModule { }
