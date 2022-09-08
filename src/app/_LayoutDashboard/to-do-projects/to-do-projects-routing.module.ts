import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoProjectsComponent } from "./to-do-projects.component";

const routes: Routes = [{
  path: '', component: ToDoProjectsComponent,
  children:[
    {
      path: 'projectinfo/:projectcode',
      loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
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
export class ToDoProjectsRoutingModule { }
