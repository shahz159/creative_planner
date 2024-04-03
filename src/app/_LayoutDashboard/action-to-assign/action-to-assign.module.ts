import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionToAssignRoutingModule } from './action-to-assign-routing.module';
import { ActionToAssignComponent } from './action-to-assign.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    MatChipsModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatAutocompleteModule,
    NgSelectModule
  ],
  providers:[DatePipe,{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class ActionToAssignModule { }
