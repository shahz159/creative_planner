import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProjectsAddRoutingModule } from './projects-add-routing.module';
import { ProjectsAddComponent } from './projects-add.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from "src/app/material-module";
// import { Ng2OrderModule } from 'ng2-order-pipe';
import { SortDirective } from 'src/app/Directive/sort.directive';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    ProjectsAddComponent,
    SortDirective
  ],
  imports: [
    CommonModule,
    ProjectsAddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule
  ]
})
export class ProjectsAddModule { }
