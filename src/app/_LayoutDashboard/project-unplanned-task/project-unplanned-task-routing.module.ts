import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectUnplannedTaskComponent } from "./project-unplanned-task.component";

const routes: Routes = [{
  path: '', component: ProjectUnplannedTaskComponent,
  children:[
    {
      path: 'ActionToProject/:id',
      loadChildren: () => import('../action-to-project/action-to-project.module').then(m => m.ActionToProjectModule)
    },
    {
      path:'ActionToAssign/:id',
      loadChildren: () => import('../action-to-assign/action-to-assign.module').then(m => m.ActionToAssignModule)
    },
    {
      path: 'projectinfo/:projectcode',
      loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
    }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectUnplannedTaskRoutingModule { }
