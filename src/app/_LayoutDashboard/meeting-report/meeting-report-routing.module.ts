import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingReportComponent } from './meeting-report.component';

const routes: Routes = [{ path: '', component: MeetingReportComponent,
children:[

  {
    path:'ActionToAssign/:id',
    loadChildren: () => import('../action-to-assign/action-to-assign.module').then(m => m.ActionToAssignModule)
  },
  {
    path: 'ActionToProject/:id',
    loadChildren: () => import('../action-to-project/action-to-project.module').then(m => m.ActionToProjectModule)
  }

] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingReportRoutingModule { }
