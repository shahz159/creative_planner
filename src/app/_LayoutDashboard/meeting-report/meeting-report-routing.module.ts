import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingReportComponent } from './meeting-report.component';

const routes: Routes = [{ path: '', component: MeetingReportComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingReportRoutingModule { }
