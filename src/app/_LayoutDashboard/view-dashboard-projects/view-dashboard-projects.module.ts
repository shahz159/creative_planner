import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDashboardProjectsRoutingModule } from './view-dashboard-projects-routing.module';
import { ViewDashboardProjectsComponent } from './view-dashboard-projects.component';
//import { DateFormatPipePipe } from 'src/app/Shared/date-format-pipe.pipe';
//import { GrdFilterPipePipe } from 'src/app/Shared/Filter/grd-filter-pipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { SortDirective } from 'src/app/Directive/sort.directive';
//import { ProjectInfoComponent } from '../project-info/project-info.component';
import{ViewDateAgo}from './view-date-ago'
import { SortDirective } from './sort.directive';
//import {  SharedProjectsDetailComponent} from "src/app/Shared/shared-projects-detail/shared-projects-detail.component";


@NgModule({
  declarations: [
    ViewDashboardProjectsComponent,
    ViewDateAgo,
    //ProjectInfoComponent,
   
    SortDirective
    //SharedProjectsDetailComponent
    //DateFormatPipePipe,
    //GrdFilterPipePipe
    //SortDirective
  ],
  imports: [
    CommonModule,
    ViewDashboardProjectsRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
    //,ProjectInfoComponent
  ]
})
export class ViewDashboardProjectsModule { }
