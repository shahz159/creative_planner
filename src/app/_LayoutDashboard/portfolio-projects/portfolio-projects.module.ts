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
import { MY_FORMATS, PortfolioProjectsComponent } from './portfolio-projects.component';
import { SortDirective } from './sort.directive';
import { DateFormatPipePipe } from 'src/app/Shared/date-format-pipe.pipe';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { angularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { TimeDiffPipe } from 'src/app/Shared/time-diff.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [
    PortfolioProjectsComponent,
    SortDirective,
    DateFormatPipePipe,
    TimeDiffPipe
  ],
  imports: [
    CommonModule,
    GooglePlaceModule,
    PortfolioProjectsRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    MatDatepickerModule,
    NgSelectModule,
    ToastrModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [ DatePipe,{provide:MAT_DATE_FORMATS,useValue:MY_FORMATS},  ],
})
export class PortfolioProjectsModule { }
