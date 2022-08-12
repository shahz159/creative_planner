import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDetailsComponent } from './more-details.component';
import { ActionToProjectComponent } from '../action-to-project/action-to-project.component';

const routes: Routes = [{ path: '', component: MoreDetailsComponent,
// path: 'ActionToProject', component: ActionToProjectComponent,

children:[
  {
    path: 'ActionToProject',
    loadChildren: () => import('../action-to-project/action-to-project.module').then(m => m.ActionToProjectModule)
  }

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreDetailsRoutingModule { }
