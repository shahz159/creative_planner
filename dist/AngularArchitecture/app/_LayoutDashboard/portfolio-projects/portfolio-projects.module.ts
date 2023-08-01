import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from "src/app/material-module";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PortfolioProjectsRoutingModule } from './portfolio-projects-routing.module';
import { PortfolioProjectsComponent } from './portfolio-projects.component';
import { SortDirective } from './sort.directive';
import { DateFormatPipePipe } from 'src/app/Shared/date-format-pipe.pipe';

@NgModule({
  declarations: [
    PortfolioProjectsComponent,
    SortDirective,
    DateFormatPipePipe,
  
  ],
  imports: [
    CommonModule,
    PortfolioProjectsRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastrModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
 
})
export class PortfolioProjectsModule { }
