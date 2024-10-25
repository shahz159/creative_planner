import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ShareModule } from 'src/app/Shared/share/share.module';
import { TimelineComponent } from './timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [TimelineComponent], 
  imports: [
    CommonModule,
    TimelineRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatDatepickerModule,

  ],
  providers:[DatePipe,{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  exports:[TimelineComponent]
})
export class TimelineModule { }
