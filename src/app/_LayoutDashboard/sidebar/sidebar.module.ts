import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarRoutingModule } from './sidebar-routing.module';
//import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
  //  SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    NgbModule
  ],
  exports: [
   // SidebarComponent
  ]
})
export class SidebarModule { }
