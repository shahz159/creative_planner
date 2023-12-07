import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent, MY_FORMATS } from './details/details.component';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

//import { FilterPipe } from 'path-to-filter-pipe';

@NgModule({
  declarations: [
    // FilterPipe,
    DetailsComponent,
   
    
  ],
  imports: [
    AngularEditorModule,
    CommonModule,
    DetailsRoutingModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,Ng2SearchPipeModule,
    MatSelectModule,
    MatCardModule,
    GooglePlaceModule
    
  ],
  providers: [ 
    ProjectUnplannedTaskComponent, ToDoProjectsComponent, MoreDetailsComponent, DatePipe, ProjectsSummaryComponent, MeetingReportComponent,
    ,{provide:MAT_DATE_FORMATS,useValue:MY_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]}
   ]
})
export class DetailsModule { }
