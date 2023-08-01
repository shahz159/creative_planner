import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsSummaryRoutingModule } from './projects-summary-routing.module';
import { ProjectsSummaryComponent } from './projects-summary.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MaterialModule } from "src/app/material-module";
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DateAgoPipe } from "src/app/Shared/DateAgo/DateAgoPipe";
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { SortDirective } from './sort.directive';
//import { ProjectInfoComponent } from '../project-info/project-info.component';

@NgModule({
  declarations: [
    ProjectsSummaryComponent,
    DateAgoPipe, 
    SortDirective,
  // ProjectInfoComponent
    
  ],
  imports: [
    CommonModule,
    ProjectsSummaryRoutingModule,
    FormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    AutocompleteLibModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    VirtualScrollerModule
  ] 
})
export class ProjectsSummaryModule { }
