import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectAssignTaskComponent } from "./project-assign-task.component";
//import { ProjectAssignTaskModule } from './project-assign-task.module';

const routes: Routes = [{
  path: '', component: ProjectAssignTaskComponent,
  children:[
    {
      path: 'projectinfo/:projectcode',
      loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
    },
    {
      path:'ActionToAssign',
      loadChildren: () => import('../action-to-assign/action-to-assign.module').then(m => m.ActionToAssignModule),
    }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectAssignTaskRoutingModule { }
