import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent, MY_FORMATS } from './dashboard.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MaterialModule } from "src/app/material-module";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatePickerFormatDirective } from "./date-picker-format.directive";
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { GuidedTourModule, GuidedTourService } from 'ngx-guided-tour';

FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin,
  listPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    DashboardComponent,DatePickerFormatDirective

    // DefaultComponent,
    //SidebarComponent
    //SidebarComponent
  ],
  imports: [
    AngularEditorModule,
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,
    NgSelectModule,
    MatDialogModule, MatChipsModule, MatFormFieldModule,
    MatIconModule,
    MatCardModule
    , MaterialModule
    , GooglePlaceModule
    , NgxDaterangepickerMd.forRoot()
    ,PdfViewerModule
    ,NgxDocViewerModule,
    GuidedTourModule
  ],
  providers: [DatePipe
    ,{provide:MAT_DATE_FORMATS,useValue:MY_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]}, GuidedTourService,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

