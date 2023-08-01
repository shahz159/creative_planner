import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { SortDirective } from 'src/app/Directive/sort.directive';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from "src/app/material-module";
//import { Ng2OrderModule } from 'ng2-order-pipe';
//import { DateFormatPipePipe } from 'src/app/Shared/date-format-pipe.pipe';
//import { GrdFilterPipePipe } from 'src/app/Shared/Filter/grd-filter-pipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import {FilterPipeSearchPipe  } from "src/app/Shared/filter-pipe-search.pipe";
//import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
  HomeComponent,
 // FilterPipeSearchPipe
  //DateFormatPipePipe,
    //GrdFilterPipePipe,
    
    //SortDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgMultiSelectDropDownModule,
    
    FormsModule,
    ReactiveFormsModule,
    
  
    NgSelectModule,
    ToastrModule,
    MaterialModule,
    //Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
 // exports:[SortDirective]
})
export class HomeModule { }
