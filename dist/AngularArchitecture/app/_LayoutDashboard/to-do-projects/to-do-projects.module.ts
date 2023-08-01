import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDoProjectsRoutingModule } from './to-do-projects-routing.module';
import { ToDoProjectsComponent } from "./to-do-projects.component";
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { MatDatepickerToggle } from '@angular/material/datepicker';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectUnplannedTaskComponent } from '../project-unplanned-task/project-unplanned-task.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';



@NgModule({
  declarations: [
    ToDoProjectsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatDatepickerToggle,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ToDoProjectsRoutingModule,
    NgMultiSelectDropDownModule,
    Ng2SearchPipeModule
  ]
,providers:[NotificationService,ProjectUnplannedTaskComponent,MoreDetailsComponent,DatePipe,ProjectsSummaryComponent],

exports:[
    ToDoProjectsComponent
  ]
})
export class ToDoProjectsModule { }
