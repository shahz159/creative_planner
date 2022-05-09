import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { ViewDashboardProjectsModule } from "../view-dashboard-projects/view-dashboard-projects.module";
// import { ProjectInfoModule } from "../project-info/project-info.module";

@NgModule({
  declarations: [
    MasterComponent
   // ProjectInfoComponent
   
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
    // NgMultiSelectDropDownModule,
    // ViewDashboardProjectsModule,
    // ProjectInfoModule
    
  ]
})
export class MasterModule { }
