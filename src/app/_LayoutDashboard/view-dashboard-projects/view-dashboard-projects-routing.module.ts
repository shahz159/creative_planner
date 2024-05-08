import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDashboardProjectsComponent } from './view-dashboard-projects.component';

const routes: Routes = [{
  path: '',
  component: ViewDashboardProjectsComponent,
  children: [
    {
      path: 'projectinfo/:projectcode/:id',
      loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)

    },
    {
      path:'projectinfo/:projectcode/:actioncode/:id',
      loadChildren:()=>import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDashboardProjectsRoutingModule { }
