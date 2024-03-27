import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionToProjectRoutingModule } from './action-to-project-routing.module';
import { ActionToProjectComponent } from './action-to-project.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NotificationService } from 'src/app/_Services/notification.service';

import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [ActionToProjectComponent],
  imports: [
    CommonModule,
    ActionToProjectRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,NgSelectModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  exports:[
    ActionToProjectComponent
  ],
  providers:[
    NotificationService,
    DatePipe,{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]

})
export class ActionToProjectModule { }
