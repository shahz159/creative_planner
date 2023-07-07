import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NotificationComponent],
  imports: [
    CommonModule,NgSelectModule,
    FormsModule,ReactiveFormsModule,
    NotificationRoutingModule,
    Ng2SearchPipeModule
  ],
  exports:[
    NotificationComponent
  ]
})
export class NotificationModule { }
