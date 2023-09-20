import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ],
  providers:[DatePipe,{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class TimelineModule { }
