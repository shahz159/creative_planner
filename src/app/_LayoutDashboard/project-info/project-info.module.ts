import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectInfoRoutingModule } from './project-info-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectInfoComponent } from './project-info.component';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import listPlugin from '@fullcalendar/list';
import { NgSelectModule } from '@ng-select/ng-select';
import { FocusOnClickDirective } from './focus-on-click.directive';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { PortfolioProjectsComponent } from '../portfolio-projects/portfolio-projects.component';
import { ViewDashboardProjectsComponent } from '../view-dashboard-projects/view-dashboard-projects.component';
import { ProjectsAddComponent } from '../projects-add/projects-add.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { NotificationComponent } from '../notification/notification.component';
import { TruncatePipe } from './truncate.pipe';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   interactionPlugin,
//   listPlugin,
// ]);

@NgModule({

  imports: [
    FormsModule,
    CommonModule,
    // BrowserModule,
    ProjectInfoRoutingModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    DatePipe,
    ReactiveFormsModule,
    MatDatepickerModule, MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    Ng2SearchPipeModule
  

  ],
  declarations: [ ProjectInfoComponent, FocusOnClickDirective, TruncatePipe],
  providers:[DatePipe, ProjectsSummaryComponent, PortfolioProjectsComponent,
             ViewDashboardProjectsComponent, ProjectsAddComponent, ToDoProjectsComponent,NotificationComponent,CreateProjectComponent],
 exports:[TruncatePipe]

})
export class ProjectInfoModule { }
