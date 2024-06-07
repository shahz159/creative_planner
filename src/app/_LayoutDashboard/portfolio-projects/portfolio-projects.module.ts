import { NgModule } from '@angular/core';
import { CommonModule ,DatePipe} from '@angular/common';
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
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { angularEditorConfig } from '@kolkov/angular-editor/lib/config';


@NgModule({
  declarations: [
    PortfolioProjectsComponent,
    SortDirective,
    DateFormatPipePipe,

  ],
  imports: [
    CommonModule,
    GooglePlaceModule,
    PortfolioProjectsRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NgSelectModule,
    ToastrModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [ DatePipe  ],
})
export class PortfolioProjectsModule { }
