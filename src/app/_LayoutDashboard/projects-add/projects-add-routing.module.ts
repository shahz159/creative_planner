import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsAddComponent } from './projects-add.component';

const routes: Routes = [{ path: '', component: ProjectsAddComponent,
children:[
  {
    path: 'projectinfo/:projectcode',
    loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsAddRoutingModule { }
