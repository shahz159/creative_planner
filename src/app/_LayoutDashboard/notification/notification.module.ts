import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NotificationRoutingModule,
    Ng2SearchPipeModule
  ],
  exports:[
    NotificationComponent
  ]
})
export class NotificationModule { }
