import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent} from './create-project.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component'; 
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [CreateProjectComponent],
  imports: [
    CommonModule,
    CreateProjectRoutingModule,
    NgSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatCheckboxModule,
    FormsModule
  
  ],
  providers: [ProjectsSummaryComponent]
})
export class CreateProjectModule { }
