import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectUnplannedTaskComponent } from "./project-unplanned-task.component";
import { ProjectUnplannedTaskRoutingModule } from './project-unplanned-task-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TaskDateAgoPipe } from './task-date-ago.pipe';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { DatePipe } from '@angular/common';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { DetailsComponent } from '../details/details.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';
//import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-';
@NgModule({
  declarations: [
    ProjectUnplannedTaskComponent,
    TaskDateAgoPipe,
    //MatMomentDateModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectUnplannedTaskRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSelectModule,
    NgMultiSelectDropDownModule,
    Ng2SearchPipeModule,
    MatCheckboxModule,
    NgSelectModule
    
  ],
  exports:[
    ProjectUnplannedTaskComponent, 
  ],
    providers: [ 
      NotificationService, ToDoProjectsComponent, MoreDetailsComponent, DatePipe,
      MeetingDetailsComponent, ProjectsSummaryComponent,MeetingReportComponent, DetailsComponent,CreateProjectComponent
  ] 
})
export class ProjectUnplannedTaskModule { }
