import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent} from './create-project.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { DetailsComponent } from '../details/details.component';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';

@NgModule({
  declarations: [CreateProjectComponent],
  imports: [
    CommonModule,
    CreateProjectRoutingModule,
    NgSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    GooglePlaceModule
  ],
  providers: [ProjectsSummaryComponent,MeetingReportComponent,DetailsComponent,DatePipe,ProjectUnplannedTaskComponent,ToDoProjectsComponent,MoreDetailsComponent,MeetingDetailsComponent  ]
})
export class CreateProjectModule { }


