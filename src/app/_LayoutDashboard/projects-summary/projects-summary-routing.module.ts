import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ProjectInfoComponent } from '../project-info/project-info.component';

import { ProjectsSummaryComponent } from './projects-summary.component';

const routes: Routes = [{
  path: '', component: ProjectsSummaryComponent,
  children:[
    {
      path: 'projectinfo/:projectcode/:id',
      loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
    },
    {
      path: 'createproject',
      loadChildren: () => import('../create-project/create-project.module').then(m => m.CreateProjectModule)
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsSummaryRoutingModule { }
