import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent} from './create-project.component';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component'; 
import { NgSelectModule } from '@ng-select/ng-select';




@NgModule({
  declarations: [CreateProjectComponent],
  imports: [
    CommonModule,
    CreateProjectRoutingModule,
    NgSelectModule
  ],
  providers: [ProjectsSummaryComponent]
})
export class CreateProjectModule { }
