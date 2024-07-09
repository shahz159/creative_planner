import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StreamCalendarComponent } from './stream-calendar.component';

const routes: Routes = [{
  path: '', component: StreamCalendarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamCalendarRoutingModule { }
