import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamDashboardComponent } from './stream-dashboard.component';

const routes: Routes = [{
  path: '', component: StreamDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamDashboardRoutingModule { }
