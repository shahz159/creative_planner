import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent} from './details.component';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';
import { ShareModule } from 'src/app/Shared/share/share.module';
import { MatTooltipModule } from '@angular/material/tooltip';





//import { FilterPipe } from 'path-to-filter-pipe';

@NgModule({
  declarations: [
    // FilterPipe,
    DetailsComponent
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
    GooglePlaceModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatCheckboxModule,
    ScrollingModule,
    ShareModule,
    MatTooltipModule

    ],
  providers: [
    ProjectUnplannedTaskComponent, ToDoProjectsComponent, MoreDetailsComponent, DatePipe, ProjectsSummaryComponent,
     MeetingDetailsComponent,MeetingReportComponent, CreateProjectComponent
   ],
   schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsModule { }
