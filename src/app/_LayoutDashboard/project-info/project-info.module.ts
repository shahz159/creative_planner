import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    ReactiveFormsModule

  ],
  declarations: [ ProjectInfoComponent, FocusOnClickDirective ],
 //exports:[ProjectInfoComponent]
  
})
export class ProjectInfoModule { }
