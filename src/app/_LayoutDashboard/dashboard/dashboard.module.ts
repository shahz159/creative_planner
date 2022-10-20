import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
]);

@NgModule({
  declarations: [
    DashboardComponent,
   
   // DefaultComponent,
    //SidebarComponent
    //SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,
    NgSelectModule
  ],
  providers:[DatePipe],
  exports:[DashboardComponent] 
})
export class DashboardModule { }
