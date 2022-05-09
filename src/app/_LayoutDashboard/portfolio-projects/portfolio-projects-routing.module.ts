import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioProjectsComponent } from './portfolio-projects.component';

const routes: Routes = [{
  path: '', component: PortfolioProjectsComponent,
  children: [
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
export class PortfolioProjectsRoutingModule { }
