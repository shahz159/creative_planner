import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {NotificationComponent} from './notification.component';

const routes: Routes = [{ path: '', component: NotificationComponent,
children:[
  {
    path: 'projectinfo/:projectcode/:id',
    loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
  }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
