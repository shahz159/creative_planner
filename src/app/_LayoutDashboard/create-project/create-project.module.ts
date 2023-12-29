import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent} from './create-project.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [CreateProjectComponent],
  imports: [
    CommonModule,
    CreateProjectRoutingModule,
    NgSelectModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule

  ],

  providers: [ProjectsSummaryComponent]
})
export class CreateProjectModule { }


