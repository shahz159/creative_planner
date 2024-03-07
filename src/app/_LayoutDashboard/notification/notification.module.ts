import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { SortDirective } from '../projects-summary/sort.directive';
import { ProjectsSummaryModule } from '../projects-summary/projects-summary.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NotificationComponent],
  imports: [
    CommonModule,NgSelectModule,
    FormsModule,ReactiveFormsModule,
    NotificationRoutingModule,
    Ng2SearchPipeModule,
    ProjectsSummaryModule
  ],
  exports:[
    NotificationComponent
  ],
  providers: [],
})
export class NotificationModule { }
