import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDetailsComponent } from './more-details.component';

const routes: Routes = [{ path: '', component: MoreDetailsComponent,

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
